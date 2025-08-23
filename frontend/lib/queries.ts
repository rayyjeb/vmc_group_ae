"use client";
import { useMemo } from "react";
import { useDataQuery, useDataMutation, useInvalidateQueries } from "./hooks";
import {
  productApi,
  categoryApi,
  brandApi,
  clientApi,
  serviceApi,
} from "./api";

// Product query hooks
export function useProducts() {
  return useDataQuery(["products"], productApi.getAll, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime in newer versions)
  });
}

export function useProduct(id: string) {
  return useDataQuery(["products", id], () => productApi.getById(id), {
    enabled: !!id,
  });
}

// Optimized: Use cached products data instead of separate API calls
export function useProductsByCategory(categoryId: string, options?: any) {
  const { data: allProducts = [], isLoading: isLoadingAll, error } = useProducts();
  
  const filteredProducts = useMemo(() => {
    if (!categoryId || !allProducts.length) return [];
    return allProducts.filter((product: any) => {
      const productCategoryId = typeof product.category === 'string' 
        ? product.category 
        : product.category?._id || product.category?.id;
      return productCategoryId === categoryId;
    });
  }, [allProducts, categoryId]);

  return {
    data: filteredProducts,
    isLoading: isLoadingAll,
    error,
    ...options
  };
}

export function useSearchProducts(query: string) {
  const { data: allProducts = [] } = useProducts();
  
  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const searchTerm = query.toLowerCase();
    return allProducts.filter((product: any) => {
      const name = product.name?.toLowerCase() || '';
      const description = product.description?.toLowerCase() || '';
      
      let categoryText = '';
      if (typeof product.category === 'string') {
        categoryText = product.category.toLowerCase();
      } else if (product.category && typeof product.category === 'object') {
        categoryText = (product.category as any).name?.toLowerCase() || '';
      }
      
      return name.includes(searchTerm) || 
             description.includes(searchTerm) || 
             categoryText.includes(searchTerm);
    });
  }, [allProducts, query]);

  return {
    data: searchResults,
    isLoading: false, // Since we're using cached data
    error: null
  };
}

// Product mutation hooks
export function useCreateProduct() {
  const { invalidateQueries } = useInvalidateQueries();
  return useDataMutation(productApi.create, {
    onSuccess: () => {
      invalidateQueries(["products"]);
    },
  });
}

export function useUpdateProduct() {
  const { invalidateQueries } = useInvalidateQueries();
  return useDataMutation(
    ({ id, product }: { id: string; product: any }) =>
      productApi.update(id, product),
    {
      onSuccess: (_, { id }) => {
        invalidateQueries(["products"]);
        invalidateQueries(["products", id]);
      },
    }
  );
}

export function useDeleteProduct() {
  const { invalidateQueries } = useInvalidateQueries();
  return useDataMutation(productApi.delete, {
    onSuccess: () => {
      invalidateQueries(["products"]);
    },
  });
}

// Category query hooks
export function useCategories() {
  return useDataQuery(["categories"], categoryApi.getAll, {
    staleTime: 10 * 60 * 1000, // 10 minutes - categories change less frequently
    gcTime: 30 * 60 * 1000, // 30 minutes (renamed from cacheTime in newer versions)
  });
}

export function useCategory(id: string) {
  return useDataQuery(["categories", id], () => categoryApi.getById(id), {
    enabled: !!id,
  });
}

// export function useSubcategories(categoryId: string) {
//   return useDataQuery(
//     ["categories", categoryId, "subcategories"],
//     () => categoryApi.getSubcategories(categoryId),
//     { enabled: !!categoryId }
//   );
// }

// Brand query hooks
export function useBrands() {
  return useDataQuery(["brands"], brandApi.getAll);
}

export function useBrand(id: string) {
  return useDataQuery(["brands", id], () => brandApi.getById(id), {
    enabled: !!id,
  });
}

// Client query hooks
export function useClients() {
  return useDataQuery(["clients"], clientApi.getAll);
}

export function useClient(id: string) {
  return useDataQuery(["clients", id], () => clientApi.getById(id), {
    enabled: !!id,
  });
}

// Service query hooks
export function useServices() {
  return useDataQuery(["services"], serviceApi.getAll);
}

export function useService(id: string) {
  return useDataQuery(["services", id], () => serviceApi.getById(id), {
    enabled: !!id,
  });
}

export function useServicesByCategory(categoryId: string) {
  return useDataQuery(
    ["services", "category", categoryId],
    () => serviceApi.getByCategory(categoryId),
    { enabled: !!categoryId }
  );
}