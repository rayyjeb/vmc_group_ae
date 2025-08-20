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
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        // Check authentication first
        const token = localStorage.getItem("adminToken");
        console.log("🔐 Auth check:", {
            hasToken: !!token,
            tokenLength: token?.length,
            tokenPreview: token ? `${token.substring(0, 20)}...` : 'None'
        });

        if (!token) {
            console.error("❌ No admin token found! Please log in first.");
            toast({
                title: "Authentication Required",
                description: "Please log in to access the admin panel",
                variant: "destructive",
            });
            return;
        }

        console.log("✅ Token found, fetching categories...");
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            console.log("🔑 Fetching categories with token:", token ? "Present" : "Missing");

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/categories`;
            console.log("🌐 Categories API URL:", apiUrl);

            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            console.log("📡 Categories response status:", response.status);
            console.log("📡 Categories response headers:", response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Categories API error:", response.status, errorText);
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            console.log("📦 Categories response data:", data);

            if (data.success) {
                setCategories(Array.isArray(data.data) ? data.data : []);
                console.log("✅ Categories set:", Array.isArray(data.data) ? data.data : []);
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
        setIsLoading(true);

        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    stock: parseInt(formData.stock.toString()),
                    image: formData.image,
                    images: formData.images,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setFormData({
                    name: "",
                    description: "",
                    category: "",
                    image: "",
                    images: [],
                    stock: 0,
                    featured: false,
                });
                onProductAdded();
                toast({
                    title: "Success",
                    description: "Product added successfully!",
                });
            } else {
                toast({
                    title: "Error",
                    description: data.message || "Failed to add product",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
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

    const handleImageUploaded = (imageUrl: string) => {
        setFormData(prev => ({
            ...prev,
            image: imageUrl,
            images: imageUrl ? [imageUrl] : []
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a category</option>
                            {Array.isArray(categories) && categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
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
                        />
                    </div>

                    <ImageUpload
                        onImageUploaded={handleImageUploaded}
                        currentImage={formData.image}
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
                        <Label htmlFor="featured">Featured Product</Label>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Adding Product..." : "Add Product"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}