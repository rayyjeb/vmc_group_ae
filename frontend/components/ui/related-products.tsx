"use client";

import { useMemo } from "react";
import { useProducts } from "@/lib/queries";
import { Product } from "@/types/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RelatedProductsProps {
  currentProduct: Product;
  maxProducts?: number;
  title?: string;
  className?: string;
}

const RelatedProducts = ({
  currentProduct,
  maxProducts = 4,
  title = "Related Products",
  className = "",
}: RelatedProductsProps) => {
  const { data: allProducts = [], isLoading, error } = useProducts();
  const { addToCart, cartItems } = useCart();

  // Get related products based on category and keywords matching
  const relatedProducts = useMemo(() => {
    if (!allProducts.length || !currentProduct) return [];

    const currentProductId = currentProduct.id || currentProduct._id;
    const currentCategory = currentProduct.category || '';
    
    const currentKeywords = [
      ...currentProduct.name.toLowerCase().split(/\s+/),
      ...currentProduct.description.toLowerCase().split(/\s+/)
    ].filter(word => word.length > 3); 

    const scoredProducts = allProducts
      .filter((product: Product) => {
        const productId = product.id || product._id;
        return productId !== currentProductId; 
      })
      .map((product: Product) => {
        let score = 0;
        
        // Category matching (highest priority)
        const productCategory = product.category || '';
        
        if (productCategory === currentCategory && currentCategory) {
          score += 15;
        }

        // Keywords matching in name (high priority)
        const productName = product.name.toLowerCase();
        currentKeywords.forEach(keyword => {
          if (productName.includes(keyword)) {
            score += 6;
          }
        });

        // Keywords matching in description 
        const productDescription = product.description.toLowerCase();
        currentKeywords.forEach(keyword => {
          if (productDescription.includes(keyword)) {
            score += 5;
          }
        });

        // Featured products get slight boost
        if (product.featured) {
          score += 0.2;
        }

        return { product, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score) 
      .slice(0, maxProducts)
      .map(({ product }) => product);

    return scoredProducts;
  }, [allProducts, currentProduct, maxProducts]);

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
      <div className={`py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="h-6 bg-gray-200 rounded w-48 animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
                <div className="aspect-[4/3] bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className={`py-12 ${className}`}>
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl text-custom-text-100 tracking-tighter font-DIN flex-shrink-0">
          {title}
        </h2>
        <Link href="/products" className="flex-shrink-0">
          <Button
            variant="ghost"
            className="text-brand hover:text-brand/80 font-medium text-sm sm:text-base"
          >
            <span className="hidden sm:inline">View All</span>
            <span className="sm:hidden">All</span>
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product: Product) => {
          const productId = product.id || product._id || "";
          const productName = product.name || "Product Name";
          const productDescription =
            product.description || "No description available";
          const productImage = product.image || "/placeholder-image.jpg";
          const productStock = product.stock || 0;
          const isFeatured = product.featured || false;
          const isProductInCart = isInCart(productId);

          return (
            <Link key={productId} href={`/products/${productId}`}>
              <Card className="group h-full bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-50 aspect-[4/3] w-full">
                      <Image
                        src={productImage}
                        alt={productName}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        width={300}
                        height={225}
                      />

                      {/* Featured Badge */}
                      {isFeatured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-4 flex-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand transition-colors">
                          {productName}
                        </h3>

                        <p className="text-custom-text-200 font-light line-clamp-2 mb-3 text-sm">
                          {productDescription}
                        </p>
                      </div>

                      {/* Action Button */}
                      <Button
                        variant={isProductInCart ? "default" : "secondary"}
                        size="sm"
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
          );
        })}
      </div>
    </div>
  </div>
  );
};

export default RelatedProducts;