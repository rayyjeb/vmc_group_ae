"use client";

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
  return useDataQuery(["products"], productApi.getAll);
}

export function useProduct(id: string) {
  return useDataQuery(["products", id], () => productApi.getById(id), {
    enabled: !!id,
  });
}

export function useProductsByCategory(categoryId: string) {
  return useDataQuery(
    ["products", "category", categoryId],
    () => productApi.getByCategory(categoryId),
    { enabled: !!categoryId }
  );
}

export function useSearchProducts(query: string) {
  return useDataQuery(
    ["products", "search", query],
    () => productApi.search(query),
    { enabled: !!query && query.length > 2 }
  );
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
  return useDataQuery(["categories"], categoryApi.getAll);
}

export function useCategory(id: string) {
  return useDataQuery(["categories", id], () => categoryApi.getById(id), {
    enabled: !!id,
  });
}

export function useSubcategories(categoryId: string) {
  return useDataQuery(
    ["categories", categoryId, "subcategories"],
    () => categoryApi.getSubcategories(categoryId),
    { enabled: !!categoryId }
  );
}

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
