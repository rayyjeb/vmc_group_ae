"use client"
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { Button } from './button';
import { Product } from '@/types/products';
import Link from 'next/link';
import { Badge } from './badge';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart, cartItems } = useCart();

    // Check if the product is already in the cart
    const isInCart = cartItems.some(item => item.id === product.id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation to product page
        addToCart(product);
    };

    // Safely get product properties with fallbacks
    const productId = product.id || product._id || '';
    const productName = product.name || 'Product Name';
    const productDescription = product.description || 'No description available';
    const productImage = product.image || '/placeholder-image.jpg';
    const productRating = product.rating || 0;
    const productStock = product.stock || 0;
    const isFeatured = product.featured || false;

    return (
        <div className='h-full'>
            <Link href={`/products/${productId}`}>
                <Card className="flex flex-col transition-all duration-300 hover:shadow-md h-full">
                    <div className="relative overflow-hidden aspect-[4/3] rounded-t-md flex justify-center items-center">
                        <Image
                            src={productImage}
                            alt={productName}
                            className="object-cover w-full h-full"
                            width={256}
                            height={256}
                        />
                        {isFeatured && (
                            <div className="absolute top-3 right-3">
                                <Badge variant="secondary" className="bg-brand text-white">
                                    Featured
                                </Badge>
                            </div>
                        )}
                    </div>

                    <CardContent className="p-4 flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm mb-1 text-amber-500">
                                <Star className="h-4 w-4 fill-current mr-1" />
                                <span>{productRating.toFixed(1)}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {productStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </div>
                        </div>

                        <h3 className="font-medium mt-1">{productName}</h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mt-3 flex-1">{productDescription}</p>
                    </CardContent>

                    <CardFooter className="px-4 pb-4 pt-0 flex-shrink-0">
                        <Button
                            variant={isInCart ? "default" : "secondary"}
                            size="sm"
                            className="w-full mt-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#92C33E] hover:text-white"
                            onClick={handleAddToCart}
                            disabled={productStock === 0}
                        >
                            {isInCart ? (
                                <>
                                    <Check className="h-4 w-4 mr-2" />
                                    Added
                                </>
                            ) : productStock === 0 ? (
                                <>
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Out of Stock
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Add to Cart
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    );
};

export default ProductCard;
