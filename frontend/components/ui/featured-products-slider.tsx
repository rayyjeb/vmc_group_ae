"use client";

import { useState, useEffect } from "react";
import { useProducts } from "@/lib/queries";
import { Product } from "@/types/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { ShoppingCart, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FeaturedProductsSliderProps {
  title?: string;
  maxProducts?: number;
  showFeaturedOnly?: boolean;
  className?: string;
  compact?: boolean;
  showViewAll?: boolean;
}

const FeaturedProductsSlider = ({
  title = "Featured Products",
  maxProducts = 6,
  showFeaturedOnly = true,
  className = "",
  compact = false,
  showViewAll = true,
}: FeaturedProductsSliderProps) => {
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
      <div className={`${compact ? "py-8" : "py-12"} ${className}`}>
        <div className="container mx-auto px-4">
          {title && (
            <div className="flex items-center justify-between mb-6">
              <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
              {showViewAll && (
                <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
              )}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
                <div
                  className={`${
                    compact ? "aspect-[4/3]" : "aspect-square"
                  } bg-gray-200 rounded mb-3`}
                ></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || featuredProducts.length === 0) {
    return null;
  }

  return (
    <div className={`${compact ? "py-8" : "py-12"} ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between mb-8">
            <h2
              className={`${
                compact ? "text-2xl" : "text-3xl"
              } font-bold text-gray-900 font-DIN tracking-tight`}
            >
              {title}
            </h2>
            {showViewAll && (
              <Link href="/products">
                <Button
                  variant="ghost"
                  className="text-brand hover:text-brand/80 font-medium"
                >
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Horizontal Carousel */}
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
                const productStock = product.stock || 0;
                const isFeatured = product.featured || false;
                const isProductInCart = isInCart(productId);

                return (
                  <CarouselItem
                    key={productId}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={`/products/${productId}`}>
                      <Card className="group h-full bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                        <CardContent className="p-0">
                          <div
                            className={`flex ${
                              compact ? "flex-row" : "flex-col"
                            } h-full`}
                          >
                            {/* Image */}
                            <div
                              className={`relative overflow-hidden bg-gray-50 ${
                                compact
                                  ? "w-32 h-32 flex-shrink-0"
                                  : "aspect-[4/3] w-full"
                              }`}
                            >
                              <Image
                                src={productImage}
                                alt={productName}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                width={compact ? 128 : 300}
                                height={compact ? 128 : 225}
                              />

                              {/* Featured Badge */}
                              {isFeatured && (
                                <Badge className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1">
                                  Featured
                                </Badge>
                              )}
                            </div>

                            {/* Content */}
                            <div
                              className={`flex flex-col justify-between ${
                                compact ? "flex-1 p-4" : "p-4"
                              }`}
                            >
                              <div className="flex-1">
                                <h3
                                  className={`font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand transition-colors ${
                                    compact ? "text-sm" : "text-base"
                                  }`}
                                >
                                  {productName}
                                </h3>

                                <p
                                  className={`text-gray-600 line-clamp-2 mb-3 ${
                                    compact ? "text-xs" : "text-sm"
                                  }`}
                                >
                                  {productDescription}
                                </p>
                              </div>

                              {/* Action Button */}
                              <Button
                                variant={
                                  isProductInCart ? "default" : "secondary"
                                }
                                size={compact ? "sm" : "sm"}
                                className={`w-full mt-auto transition-all duration-300 ease-in-out transform hover:scale-105 ${
                                  !isProductInCart && productStock > 0 
                                    ? "hover:!bg-[#92C33E] hover:!text-white hover:!border-[#92C33E]" 
                                    : ""
                                }`}
                                onClick={(e) => handleAddToCart(e, product)}
                                disabled={productStock === 0}
                              >
                                {isProductInCart ? (
                                  <>
                                    <Check className="h-3 w-3 mr-2" />
                                    Added
                                  </>
                                ) : productStock === 0 ? (
                                  "Out of Stock"
                                ) : (
                                  <>
                                    <ShoppingCart className="h-3 w-3 mr-2" />
                                    Add to Cart
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation Buttons - Only show when scrolling is possible */}
            {canScrollPrev && (
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md border hover:bg-gray-50 hover:border-brand transition-all duration-300" />
            )}
            {canScrollNext && (
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md border hover:bg-gray-50 hover:border-brand transition-all duration-300" />
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSlider;
