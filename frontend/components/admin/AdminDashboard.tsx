"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

interface AdminDashboardProps {
    onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
    const [activeTab, setActiveTab] = useState<"dashboard" | "add-product" | "products">("dashboard");
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalCategories: 0,
        totalSubcategories: 0,
    });
    const { toast } = useToast();

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            console.log("Fetching stats with token:", token ? "Token exists" : "No token");

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products`;
            console.log("API URL:", apiUrl);

            const [productsRes, categoriesRes, subcategoriesRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/products`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/categories`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/subcategories`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);

            const productsData = await productsRes.json();
            const categoriesData = await categoriesRes.json();
            const subcategoriesData = await subcategoriesRes.json();

            console.log("Products response:", productsData);
            console.log("Categories response:", categoriesData);
            console.log("Subcategories response:", subcategoriesData);

            setStats({
                totalProducts: productsData.data?.products?.length || 0,
                totalCategories: categoriesData.data?.categories?.length || 0,
                totalSubcategories: subcategoriesData.data?.subcategories?.length || 0,
            });
        } catch (error) {
            console.error("Error fetching stats:", error);
            toast({
                title: "Error",
                description: "Failed to fetch statistics",
                variant: "destructive",
            });
        }
    };

    const handleProductAdded = () => {
        fetchStats();
        setActiveTab("products");
        toast({
            title: "Success",
            description: "Product added successfully!",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                        <Button onClick={onLogout} variant="outline">
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "dashboard"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab("add-product")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "add-product"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Add Product
                        </button>
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "products"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Products
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {activeTab === "dashboard" && (
                    <div className="px-4 sm:px-0">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.totalProducts}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.totalCategories}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Subcategories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.totalSubcategories}</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {activeTab === "add-product" && (
                    <div className="px-4 sm:px-0">
                        <AddProductForm onProductAdded={handleProductAdded} />
                    </div>
                )}

                {activeTab === "products" && (
                    <div className="px-4 sm:px-0">
                        <ProductList onProductUpdated={fetchStats} />
                    </div>
                )}
            </main>
        </div>
    );
}