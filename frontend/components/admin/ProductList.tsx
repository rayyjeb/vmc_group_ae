"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Product {
    _id: string;
    name: string;
    description: string;
    category: {
        _id: string;
        name: string;
    } | string; // Can be either populated object or string
    image: string;
    stock: number;
    featured: boolean;
    rating?: number;
    createdAt: string;
    updatedAt: string;
}

interface ProductListProps {
    onProductUpdated: () => void;
}

export default function ProductList({ onProductUpdated }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            console.log("Fetching products with token:", token ? "Token exists" : "No token");

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products`;
            console.log("API URL:", apiUrl);

            const response = await fetch(apiUrl, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers);

            const data = await response.json();
            console.log("Response data:", data);

            if (data.success) {
                // Fix: Access the products array from the nested data structure
                const productsArray = data.data.products || [];
                setProducts(Array.isArray(productsArray) ? productsArray : []);
            } else {
                // If the API call fails, set empty array to prevent errors
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            // Set empty array on error to prevent crashes
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteProduct = async (productId: string) => {
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products/${productId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Success",
                    description: "Product deleted successfully!",
                });
                onProductUpdated();
                fetchProducts();
            } else {
                toast({
                    title: "Error",
                    description: data.message || "Failed to delete product",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    const handleToggleFeatured = async (productId: string, currentFeatured: boolean) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ featured: !currentFeatured }),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Success",
                    description: `Product ${!currentFeatured ? "marked as" : "unmarked from"} featured!`,
                });
                onProductUpdated();
                fetchProducts();
            } else {
                toast({
                    title: "Error",
                    description: data.message || "Failed to update product",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error toggling featured:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Products ({products.length})</h2>
            </div>

            {Array.isArray(products) && products.length === 0 ? (
                <Card>
                    <CardContent className="py-8 text-center">
                        <p className="text-gray-500">No products found. Add your first product!</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {Array.isArray(products) && products.map((product) => (
                        <Card key={product._id}>
                            <CardContent className="p-4">
                                <div className="flex items-start space-x-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-20 h-20 object-cover rounded-md"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://via.placeholder.com/80x80?text=No+Image";
                                        }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                    {product.description}
                                                </p>
                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                                    <span>Stock: {product.stock}</span>
                                                    <span>Category: {typeof product.category === 'string' ? product.category : product.category.name}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    {product.featured && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            Featured
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-gray-400">
                                                        Added: {new Date(product.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2 ml-4">
                                                <Button
                                                    size="sm"
                                                    variant={product.featured ? "default" : "outline"}
                                                    onClick={() => handleToggleFeatured(product._id, product.featured)}
                                                >
                                                    {product.featured ? "Unfeature" : "Feature"}
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => handleDeleteProduct(product._id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}