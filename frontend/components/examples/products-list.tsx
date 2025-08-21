"use client"
import { useProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from '@/lib/queries';
import { useState } from 'react';

export default function ProductsList() {
    const [newProduct, setNewProduct] = useState({ 
        name: '', 
        category: '', 
        description: '', 
        image: '', 
        stock: 0 
    });
    const [editingProduct, setEditingProduct] = useState<any>(null);

    // Query hooks
    const { data: products, isLoading, error } = useProducts();

    // Mutation hooks
    const createProductMutation = useCreateProduct();
    const updateProductMutation = useUpdateProduct();
    const deleteProductMutation = useDeleteProduct();

    const handleCreateProduct = (e: React.FormEvent) => {
        e.preventDefault();
        createProductMutation.mutate(newProduct, {
            onSuccess: () => {
                setNewProduct({ 
                    name: '', 
                    category: '', 
                    description: '', 
                    image: '', 
                    stock: 0 
                });
            },
        });
    };

    const handleUpdateProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            updateProductMutation.mutate({
                id: editingProduct.id,
                product: editingProduct,
            }, {
                onSuccess: () => {
                    setEditingProduct(null);
                },
            });
        }
    };

    const handleDeleteProduct = (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            deleteProductMutation.mutate(id);
        }
    };

    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products: {error.message}</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Products Management</h2>

            {/* Create Product Form */}
            <div className="mb-8 p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                <form onSubmit={handleCreateProduct} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Category"
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Description"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            className="w-full p-2 border rounded"
                            rows={3}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Stock"
                            value={newProduct.stock}
                            onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) || 0 })}
                            className="w-full p-2 border rounded"
                            min="0"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={createProductMutation.isPending}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {createProductMutation.isPending ? 'Creating...' : 'Create Product'}
                    </button>
                </form>
            </div>

            {/* Products List */}
            <div className="space-y-4">
                {products?.map((product: any) => (
                    <div key={product.id} className="p-4 border rounded-lg flex justify-between items-center">
                        <div>
                            <h4 className="font-semibold">{product.name}</h4>
                            <p className="text-gray-600">{product.category}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => setEditingProduct(product)}
                                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteProduct(product.id)}
                                disabled={deleteProductMutation.isPending}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Product Modal */}
            {editingProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
                        <form onSubmit={handleUpdateProduct} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    value={editingProduct.name}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={editingProduct.category}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    type="submit"
                                    disabled={updateProductMutation.isPending}
                                    className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                                >
                                    {updateProductMutation.isPending ? 'Updating...' : 'Update'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditingProduct(null)}
                                    className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
