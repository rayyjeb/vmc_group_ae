"use client"
import { useEffect } from 'react';
import { useProduct } from '@/lib/queries';
import { Check, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import ShareButton from '@/components/ui/share';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import FeaturedProductsSlider from '@/components/ui/featured-products-slider';
import RelatedProducts from '@/components/ui/related-products';
import CustomisationSection from '@/components/blocks/customisation';

const ProductPage = () => {
    const params = useParams();
    const productId = params?.id as string;
    const { addToCart, cartItems } = useCart();

    // Use React Query hooks for data fetching
    const { data: product, isLoading, error } = useProduct(productId);

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

    return (
        <div className="min-h-screen flex flex-col pt-12">
            <main className="flex-1">
                <div className="container mx-auto px-4 py-12 sm:px-6 pt-28 font-Urbanist">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="order-2 hidden lg:block lg:order-1 space-y-4">
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

                        {/* Product Info - All content in one column on desktop */}
                        <div className="animate-slide-in order-1 lg:order-2 space-y-6">
                            {/* Badges - Mobile First */}
                            <div className="flex items-center space-x-2 mb-4">
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

                            <h1 className="text-4xl font-medium tracking-tighter font-Urbanist">{product.name}</h1>
                            <div className="mt-4">
                                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                            <div className="lg:hidden">
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

                    <Separator className='mt-10'/>
                    <CustomisationSection />
                    <Separator className="my-12" />
                    {/* Related Products */}
                    {/* <FeaturedProductsSlider /> */}
                    <RelatedProducts currentProduct={product} />
                </div>
            </main>
        </div>
    );
};

export default ProductPage;
