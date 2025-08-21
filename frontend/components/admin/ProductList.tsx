"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Edit2, Trash2 } from "lucide-react";

interface Category {
  _id: string;
  name: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  category:
    | {
        _id: string;
        name: string;
      }
    | string;
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

interface EditFormData {
  name: string;
  description: string;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
}

export default function ProductList({ onProductUpdated }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    name: "",
    description: "",
    category: "",
    image: "",
    stock: 0,
    featured: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      }/api/products`;

      const response = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (data.success) {
        const productsArray = data.data.products || [];
        setProducts(Array.isArray(productsArray) ? productsArray : []);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      }/api/categories`;

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
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

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setEditFormData({
      name: product.name,
      description: product.description,
      category:
        typeof product.category === "string"
          ? product.category
          : product.category._id,
      image: product.image,
      stock: product.stock,
      featured: product.featured,
    });
  };

  const handleEditSubmit = async () => {
    if (!editingProduct) return;

    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("adminToken");

      // Only send fields that have actually changed
      const changes: Partial<EditFormData> = {};

      if (editFormData.name !== editingProduct.name) {
        changes.name = editFormData.name;
      }
      if (editFormData.description !== editingProduct.description) {
        changes.description = editFormData.description;
      }
      const originalCategoryId =
        typeof editingProduct.category === "string"
          ? editingProduct.category
          : editingProduct.category._id;
      if (editFormData.category !== originalCategoryId) {
        changes.category = editFormData.category;
      }
      if (editFormData.image !== editingProduct.image) {
        changes.image = editFormData.image;
      }
      if (editFormData.stock !== editingProduct.stock) {
        changes.stock = editFormData.stock;
      }
      if (editFormData.featured !== editingProduct.featured) {
        changes.featured = editFormData.featured;
      }

      if (Object.keys(changes).length === 0) {
        toast({
          title: "No Changes",
          description: "No changes were made to the product.",
        });
        setEditingProduct(null);
        return;
      }

      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
        }/api/products/${editingProduct._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(changes),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success",
          description: "Product updated successfully!",
        });
        setEditingProduct(null);
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
      console.error("Error updating product:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
        }/api/products/${productId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

  const handleToggleFeatured = async (
    productId: string,
    currentFeatured: boolean
  ) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
        }/api/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ featured: !currentFeatured }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success",
          description: `Product ${
            !currentFeatured ? "marked as" : "unmarked from"
          } featured!`,
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
            <p className="text-gray-500">
              No products found. Add your first product!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {Array.isArray(products) &&
            products.map((product) => (
              <Card key={product._id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                      width={80}
                      height={80}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/80x80?text=No+Image";
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
                            <span>
                              Category:{" "}
                              {typeof product.category === "string"
                                ? product.category
                                : product.category.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            {product.featured && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                            <span className="text-xs text-gray-400">
                              Added:{" "}
                              {new Date(product.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col flex-wrap gap-2 ml-4 min-w-[200px] justify-center items-end">
                          <Button
                            size="sm"
                            className="flex items-center w-1/2"
                            onClick={() => handleEditClick(product)}
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            className="flex items-center w-1/2"
                            onClick={() =>
                              handleToggleFeatured(
                                product._id,
                                product.featured
                              )
                            }
                          >
                            {product.featured ? "Unfeature" : "Feature"}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center w-1/2 text-white"
                            onClick={() => handleDeleteProduct(product._id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1 " />
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

      {/* Edit Product Modal */}
      {editingProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setEditingProduct(null)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Edit Product</h3>
              <p className="text-sm text-gray-600">
                Update the product information below.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="edit-name"
                  className="block text-sm font-medium mb-1"
                >
                  Name *
                </label>
                <input
                  id="edit-name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                  placeholder="Product name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="edit-description"
                  className="block text-sm font-medium mb-1"
                >
                  Description *
                </label>
                <textarea
                  id="edit-description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                  value={editFormData.description}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Product description"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="edit-category"
                  className="block text-sm font-medium mb-1"
                >
                  Category *
                </label>
                <select
                  id="edit-category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editFormData.category}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      category: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="edit-image"
                  className="block text-sm font-medium mb-1"
                >
                  Image URL *
                </label>
                <input
                  id="edit-image"
                  type="url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editFormData.image}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, image: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="edit-stock"
                  className="block text-sm font-medium mb-1"
                >
                  Stock *
                </label>
                <input
                  id="edit-stock"
                  type="number"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editFormData.stock}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      stock: parseInt(e.target.value) || 0,
                    })
                  }
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="edit-featured"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={editFormData.featured}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      featured: e.target.checked,
                    })
                  }
                />
                <label htmlFor="edit-featured" className="text-sm font-medium">
                  Featured Product
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => setEditingProduct(null)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                onClick={handleEditSubmit}
                disabled={
                  isSubmitting ||
                  !editFormData.name.trim() ||
                  !editFormData.description.trim() ||
                  !editFormData.category ||
                  !editFormData.image.trim()
                }
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
