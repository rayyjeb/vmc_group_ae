"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ImageUpload from "./ImageUpload";

interface Category {
    _id: string;
    name: string;
}

interface AddProductFormProps {
    onProductAdded: () => void;
}

interface UploadedImage {
    id: string;
    url: string;
    status: 'uploading' | 'completed' | 'error';
}

export default function AddProductForm({ onProductAdded }: AddProductFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        image: "",
        images: [] as string[],
        stock: 0,
        featured: false,
    });
    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        // Check authentication first
        const token = localStorage.getItem("adminToken");

        if (!token) {
            console.error("❌ No admin token found! Please log in first.");
            toast({
                title: "Authentication Required",
                description: "Please log in to access the admin panel",
                variant: "destructive",
            });
            return;
        }

        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/categories`;

            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Categories API error:", response.status, errorText);
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();

            if (data.success) {
                setCategories(Array.isArray(data.data) ? data.data : []);
            } else {
                console.error("❌ Categories API error:", data.message);
                setCategories([]);
            }
        } catch (error) {
            console.error("💥 Categories fetch error:", error);
            setCategories([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        
        // Validate required fields
        if (!formData.name?.trim()) {
            toast({
                title: "Validation Error",
                description: "Product name is required",
                variant: "destructive",
            });
            return;
        }
        
        if (!formData.description?.trim()) {
            toast({
                title: "Validation Error",
                description: "Product description is required",
                variant: "destructive",
            });
            return;
        }
        
        if (!formData.category) {
            toast({
                title: "Validation Error",
                description: "Please select a category",
                variant: "destructive",
            });
            return;
        }

        // Check for completed images
        const completedImages = uploadedImages.filter(img => img.status === 'completed');
        if (completedImages.length === 0) {
            toast({
                title: "Validation Error",
                description: "Please wait for at least one image to finish uploading",
                variant: "destructive",
            });
            return;
        }

        // Check if any images are still uploading
        const uploadingImages = uploadedImages.filter(img => img.status === 'uploading');
        if (uploadingImages.length > 0) {
            toast({
                title: "Please wait",
                description: `${uploadingImages.length} image(s) still uploading. Please wait for completion.`,
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            const token = localStorage.getItem("adminToken");
            
            if (!token) {
                throw new Error("Authentication required. Please log in again.");
            }
            
            // Use completed images
            const imageUrls = completedImages.map(img => img.url);
            const mainImage = imageUrls[0]; // First completed image as main
            
            const productData = {
                name: formData.name.trim(),
                description: formData.description.trim(),
                category: formData.category,
                image: mainImage,
                images: imageUrls,
                stock: parseInt(formData.stock.toString()) || 0,
                featured: formData.featured,
            };


            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });


            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Product creation failed:", response.status, errorText);
                
                if (response.status === 401) {
                    localStorage.removeItem("adminToken");
                    throw new Error("Session expired. Please log in again.");
                }
                
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();

            if (data.success) {
                // Reset form
                setFormData({
                    name: "",
                    description: "",
                    category: "",
                    image: "",
                    images: [],
                    stock: 0,
                    featured: false,
                });
                setUploadedImages([]);
                
                onProductAdded();
                
                toast({
                    title: "Success",
                    description: "Product added successfully!",
                });
            } else {
                throw new Error(data.message || "Failed to add product");
            }
        } catch (error) {
            console.error("💥 Error adding product:", error);
            
            let errorMessage = "Something went wrong. Please try again.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            
            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    // Handle image changes from the new upload component
    const handleImagesChange = (images: UploadedImage[]) => {
        setUploadedImages(images);
        
        // Update form data with completed images
        const completedImages = images.filter(img => img.status === 'completed');
        const imageUrls = completedImages.map(img => img.url);
        
        setFormData(prev => ({
            ...prev,
            image: imageUrls[0] || "",
            images: imageUrls
        }));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>
                    Fill in the details below to add a new product to the database.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name *</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                maxLength={100}
                                placeholder="Enter product name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stock">Stock Quantity *</Label>
                            <Input
                                id="stock"
                                name="stock"
                                type="number"
                                min="0"
                                value={formData.stock}
                                onChange={handleInputChange}
                                required
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            maxLength={1000}
                            rows={3}
                            placeholder="Enter product description"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Select a category</option>
                            {Array.isArray(categories) && categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {categories.length === 0 && (
                            <p className="text-xs text-gray-500">
                                Loading categories...
                            </p>
                        )}
                    </div>

                    <ImageUpload
                        onImagesChange={handleImagesChange}
                        currentImages={uploadedImages}
                    />

                    <div className="flex items-center space-x-2">
                        <input
                            id="featured"
                            name="featured"
                            type="checkbox"
                            checked={formData.featured}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="featured" className="text-sm font-medium">
                            Featured Product
                        </Label>
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={
                            isLoading || 
                            uploadedImages.filter(img => img.status === 'completed').length === 0 ||
                            uploadedImages.some(img => img.status === 'uploading')
                        }
                    >
                        {isLoading 
                            ? "Adding Product..." 
                            : uploadedImages.some(img => img.status === 'uploading')
                            ? "Waiting for uploads..."
                            : "Add Product"
                        }
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}