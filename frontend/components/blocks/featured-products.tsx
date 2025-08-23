"use client";

import { useState, useEffect } from "react";
import { useProducts } from "@/lib/queries";
import { Product } from "@/types/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronRight, ShoppingCart, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  maxProducts?: number;
  showFeaturedOnly?: boolean;
  className?: string;
}

const FeaturedProducts = ({
  title = "Featured Products",
  subtitle = "Discover our handpicked selection of premium tools and equipment",
  maxProducts = 8,
  showFeaturedOnly = true,
  className = "",
}: FeaturedProductsProps) => {
  const { data: allProducts = [], isLoading, error } = useProducts();
  const { addToCart, cartItems } = useCart();
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Filter and limit products
  const featuredProducts = allProducts
    .filter((product: Product) => (showFeaturedOnly ? product.featured : true))
    .slice(0, maxProducts);

  // Update scroll state when API changes
  useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    // Initial state
    updateScrollState();

    // Listen for changes
    api.on("select", updateScrollState);
    api.on("reInit", updateScrollState);

    return () => {
      api.off("select", updateScrollState);
      api.off("reInit", updateScrollState);
    };
  }, [api]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.id === productId);
  };

  if (isLoading) {
    return (
      <section
        className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || featuredProducts.length === 0) {
    return null;
  }

  return (
    <section
      className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-custom-text-100 tracking-tighter my-4">
            {title}
          </h2>
          <p className="text-custom-text-200 text-base mb-10">{subtitle}</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product: Product) => {
                const productId = product.id || product._id || "";
                const productName = product.name || "Product Name";
                const productDescription =
                  product.description || "No description available";
                const productImage = product.image || "/placeholder-image.jpg";
                const productRating = product.rating || 0;
                const productStock = product.stock || 0;
                const isFeatured = product.featured || false;
                const isProductInCart = isInCart(productId);

                return (
                  <CarouselItem
                    key={productId}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="h-full">
                      <Link href={`/products/${productId}`}>
                        <Card className="group h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                          {/* Image Container */}
                          <div className="relative overflow-hidden aspect-square bg-gray-50">
                            <Image
                              src={productImage}
                              alt={productName}
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                              width={300}
                              height={300}
                            />

                            {/* Badges */}
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                              {isFeatured && (
                                <Badge className="bg-gradient-to-r from-orange-400 to-amber-500 text-white border-0 shadow-lg">
                                  ⭐ Featured
                                </Badge>
                              )}
                              
                            </div>

                            {/* Overlay with quick actions */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Button
                                variant="secondary"
                                size="sm"
                                className={`bg-white/90 text-gray-900 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
                                  !isProductInCart && productStock > 0
                                    ? "hover:!bg-[#92C33E] hover:!text-white hover:!border-[#92C33E]"
                                    : "hover:bg-white"
                                }`}
                                onClick={(e) => handleAddToCart(e, product)}
                                disabled={productStock === 0}
                              >
                                {isProductInCart ? (
                                  <>
                                    <Check className="h-4 w-4 mr-2" />
                                    Added
                                  </>
                                ) : (
                                  <>
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Quick Add
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>

                          <CardContent className="p-4 flex-1 flex flex-col">
                            {/* Rating */}
                            {productRating > 0 && (
                              <div className="flex items-center mb-2">
                                <div className="flex items-center text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < Math.floor(productRating)
                                          ? "fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-2">
                                  ({productRating.toFixed(1)})
                                </span>
                              </div>
                            )}

                            {/* Product Name */}
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand transition-colors duration-300">
                              {productName}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 line-clamp-2 flex-1 mb-4">
                              {productDescription}
                            </p>
                          </CardContent>

                          <CardFooter className="p-4 pt-0">
                            <Button
                              variant={
                                isProductInCart ? "default" : "secondary"
                              }
                              size="sm"
                              className={`w-full transition-all duration-300 hover:scale-105 ${
                                !isProductInCart && productStock > 0
                                  ? "hover:!bg-[#92C33E] hover:!text-white hover:!border-[#92C33E]"
                                  : ""
                              }`}
                              onClick={(e) => handleAddToCart(e, product)}
                              disabled={productStock === 0}
                            >
                              {isProductInCart ? (
                                <>
                                  <Check className="h-4 w-4 mr-2" />
                                  Added to Cart
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation Buttons - Only show when scrolling is possible */}
            {canScrollPrev && (
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 hover:bg-gray-50 hover:border-brand transition-all duration-300" />
            )}
            {canScrollNext && (
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 hover:bg-gray-50 hover:border-brand transition-all duration-300" />
            )}
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-brand hover:text-white border-2 border-brand text-brand transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
