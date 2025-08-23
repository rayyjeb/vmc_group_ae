"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useProducts,
  useCategories,
  useProductsByCategory,
} from "@/lib/queries";
import { Product } from "@/types/products";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/product-card";
import { ProductGridSkeleton } from "@/components/ui/ProductSkeleton";

const PRODUCTS_PER_PAGE = 40;

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryFromUrl
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  const router = useRouter();
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `All Products - VMC General Trading LLC`;
  }, []);

  // Fetch data with proper error handling - optimized for performance
  const {
    data: allProducts = [],
    isLoading: isLoadingProducts,
    error: productsError,
  } = useProducts();
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useCategories();

  // Use optimized category filtering that leverages cached data
  const {
    data: categoryProducts = [],
    isLoading: isLoadingCategoryProducts,
    error: categoryProductsError,
  } = useProductsByCategory(activeCategory || "");

  useEffect(() => {
    console.log("Categories data:", categories);
    console.log("Categories error:", categoriesError);
    console.log("Categories loading:", isLoadingCategories);
    console.log("Categories length:", categories?.length);
    console.log("Active category:", activeCategory);
    console.log("Category products:", categoryProducts);
    console.log("All products:", allProducts);
  }, [
    categories,
    categoriesError,
    isLoadingCategories,
    activeCategory,
    categoryProducts,
    allProducts,
  ]);

  // Update activeCategory when URL changes
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery, activeCategory]);

  // Scroll to top when page changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // Get products based on category and search
  const getFilteredProducts = (): Product[] => {
    // Start with the appropriate product set
    let products: Product[] = [];

    if (activeCategory) {
      // Use category-specific products
      products = categoryProducts || [];
      console.log("Using category products:", products.length);
    } else {
      // Use all products
      products = allProducts || [];
      console.log("Using all products:", products.length);
    }

    // Apply search filter if there's a search query
    if (debouncedSearchQuery) {
      products = products.filter((product: Product) => {
        const name = product.name?.toLowerCase() || "";
        const description = product.description?.toLowerCase() || "";

        // Handle category field
        let categoryText = "";
        if (typeof product.category === "string") {
          categoryText = product.category.toLowerCase();
        } else if (product.category && typeof product.category === "object") {
          categoryText = (product.category as any).name?.toLowerCase() || "";
        }

        const query = debouncedSearchQuery.toLowerCase();

        return (
          name.includes(query) ||
          description.includes(query) ||
          categoryText.includes(query)
        );
      });
    }

    console.log("Filtered products:", products.length);
    return products;
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Get current page products
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleCategoryChange = (categoryId: string) => {
    console.log("Category changed to:", categoryId);

    if (categoryId === "all") {
      setActiveCategory(null);
      router.push("/products", { scroll: false });
    } else {
      setActiveCategory(categoryId);
      router.push(`/products?category=${categoryId}`, { scroll: false });
    }
    setCurrentPage(1);
  };

  // Helper function to get category name
  const getCategoryName = (categoryId: string | null): string => {
    if (!categoryId) return "All Products";

    // Handle both _id and id fields
    const category = categories?.find(
      (c: any) => c.id === categoryId || c._id === categoryId
    );

    return category?.name || "Category";
  };

  // Get the current tab value for the Tabs component
  const getCurrentTabValue = (): string => {
    return activeCategory || "all";
  };

  const isLoading =
    isLoadingProducts ||
    isLoadingCategories ||
    (activeCategory && isLoadingCategoryProducts);
  const error = productsError || categoriesError || categoryProductsError;

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 sm:px-6 pt-28 font-Urbanist">
            <div className="text-center py-12">
              <p className="text-red-500">
                Error loading data: {error.message}
              </p>
              <Button
                variant="custom"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-12">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 pt-28 font-Urbanist">
          <div className="flex justify-between items-center">
            <div className="mb-8">
              <h1 className="text-5xl tracking-tighter font-DIN transition-all duration-300">
                {getCategoryName(activeCategory)}
              </h1>
              <p className="text-muted-foreground mt-2 transition-all duration-300">
                {activeCategory
                  ? `Browse our complete collection of ${
                      getCategoryName(activeCategory)?.toLowerCase() ||
                      "products"
                    }`
                  : "Browse our complete collection of professional tools and equipment"}
              </p>
              {(activeCategory || debouncedSearchQuery) && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-brand">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                    {activeCategory
                      ? ` in ${getCategoryName(activeCategory)}`
                      : ""}
                    {debouncedSearchQuery
                      ? ` matching "${debouncedSearchQuery}"`
                      : ""}
                  </span>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="hidden md:block mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Tabs with improved scrolling */}
          <div className="mb-8 relative">
            <div
              ref={tabsContainerRef}
              className="relative overflow-x-auto custom-scrollbar"
            >
              <Tabs
                value={getCurrentTabValue()}
                onValueChange={handleCategoryChange}
                className="w-full"
              >
                <TabsList className="w-full justify-start py-1 gap-1">
                  <TabsTrigger value="all">
                    All Products ({allProducts.length})
                  </TabsTrigger>
                  {categories && categories.length > 0
                    ? categories.map((category: any) => {
                        const categoryId = category.id || category._id;
                        const categoryName = category.name;

                        return (
                          <TabsTrigger key={categoryId} value={categoryId}>
                            {categoryName}
                          </TabsTrigger>
                        );
                      })
                    : null}
                </TabsList>
              </Tabs>

              {/* Gradient fade indicators for desktop */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 mb-8"></div>

          {isLoading ? (
            <ProductGridSkeleton count={12} />
          ) : filteredProducts.length > 0 ? (
            <>
              {/* Results count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {indexOfFirstProduct + 1}-
                  {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                  {filteredProducts.length} products
                  {activeCategory && ` in ${getCategoryName(activeCategory)}`}
                  {debouncedSearchQuery &&
                    ` matching "${debouncedSearchQuery}"`}
                </p>
              </div>

              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 stagger-animate">
                {currentProducts.map((product: Product) => {
                  // Handle both _id and id fields
                  const productId = product.id || product._id;
                  return (
                    <div key={productId} className="animate-fade-in">
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button
                    variant="custom"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, idx) => (
                      <Button
                        key={`page-${idx}`}
                        variant={currentPage === idx + 1 ? "default" : "custom"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setCurrentPage(idx + 1)}
                      >
                        {idx + 1}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="custom"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  {debouncedSearchQuery
                    ? `No products found matching "${debouncedSearchQuery}"`
                    : activeCategory
                    ? `No products found in ${getCategoryName(activeCategory)}`
                    : "No products available at the moment"}
                </p>
              </div>
              {(debouncedSearchQuery || activeCategory) && (
                <div className="flex gap-2 justify-center">
                  {debouncedSearchQuery && (
                    <Button variant="custom" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  )}
                  {activeCategory && (
                    <Button
                      variant="custom"
                      onClick={() => handleCategoryChange("all")}
                    >
                      View All Products
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
