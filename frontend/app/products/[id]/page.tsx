"use client"
import { useEffect } from 'react';
import { useProduct, useProductsByCategory } from '@/lib/queries';
import { Star, Check, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/product-card';
import ShareButton from '@/components/ui/share';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const ProductPage = () => {
    const params = useParams();
    const productId = params?.id as string;
    const { addToCart, cartItems } = useCart();

    // Use React Query hooks for data fetching
    const { data: product, isLoading, error } = useProduct(productId);
    const { data: relatedProducts = [] } = useProductsByCategory(product?.category || '');

    useEffect(() => {
        if (product) {
            document.title = `${product.name} - VMC General Trading LLC`;
        } else {
            document.title = 'Product Not Found - VMC General Trading LLC';
        }
    }, [product]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    // Check if the product is already in the cart
    const isInCart = product ? cartItems.some(item => item.id === product.id) : false;

    if (error) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 container mx-auto px-4 py-12">
                    <div className="text-center py-12">
                        <p className="text-red-500">Error loading product: {error.message}</p>
                    </div>
                </main>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="rounded-lg bg-muted animate-pulse h-[400px]"></div>
                        <div className="space-y-4">
                            <div className="h-8 bg-muted animate-pulse rounded-md w-3/4"></div>
                            <div className="h-6 bg-muted animate-pulse rounded-md w-1/4"></div>
                            <div className="h-24 bg-muted animate-pulse rounded-md w-full"></div>
                            <div className="h-10 bg-muted animate-pulse rounded-md w-1/3"></div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 container mx-auto px-4 py-12">
                    <div className="text-center py-12">
                        <p className="text-gray-600">Product not found</p>
                    </div>
                </main>
            </div>
        );
    }

    // Filter out current product and limit related products
    const filteredRelatedProducts = relatedProducts
        .filter(item => item.id !== productId)
        .slice(0, 4);

    return (
        <div className="min-h-screen flex flex-col pt-12">
            <main className="flex-1">
                <div className="container mx-auto px-4 py-12 sm:px-6 pt-28 font-Urbanist">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full"
                                    width={256}
                                    height={256}
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="animate-slide-in">
                            <div className="flex items-center space-x-2 mb-2">
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                    {typeof product.category === 'string'
                                        ? product.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                        : product.category && typeof product.category === 'object' && 'name' in product.category
                                            ? (product.category as { name: string }).name.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                            : 'Uncategorized'
                                    }
                                </Badge>
                                {product.featured && (
                                    <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                                        Featured
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight font-Urbanist">{product.name}</h1>

                            <div className="flex items-center mt-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(product.rating || 0) ? 'fill-amber-400 text-amber-400' : i < (product.rating || 0) ? 'fill-amber-400/50 text-amber-400/50' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-muted-foreground">
                                    {(product.rating || 0).toFixed(1)} rating
                                </span>
                            </div>

                            <div className="mt-4">
                                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>

                            <Separator className="my-6" />

                            <div className="mt-4">
                                <h3 className="text-lg font-medium">Description</h3>
                                <p className="mt-2 text-muted-foreground">
                                    {product.description || 'No description available'}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="flex-1 py-2.5 sm:py-0 flex items-center justify-center"
                                    onClick={() => addToCart(product)}
                                    disabled={product.stock === 0}
                                >
                                    {isInCart ? (
                                        <>
                                            <Check className="mr-2 h-5 w-5" />
                                            Update Cart
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="mr-2 h-5 w-5" />
                                            Add to Cart and Enquire
                                        </>
                                    )}
                                </Button>

                                <ShareButton />
                            </div>
                        </div>
                    </div>

                    <Separator className="my-12" />

                    {/* Related Products */}
                    {filteredRelatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {filteredRelatedProducts.map(relatedProduct => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductPage;
