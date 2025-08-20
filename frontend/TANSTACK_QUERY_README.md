# TanStack Query Setup for VMC Website

This document explains how to use the TanStack Query (React Query) setup in your Next.js application.

## What's Included

### 1. Query Provider (`components/providers/query-provider.tsx`)

- Wraps your entire application with TanStack Query
- Includes React Query DevTools for development
- Configured with sensible defaults for SSR

### 2. Generic Hooks (`lib/hooks.ts`)

- `useDataQuery`: Generic hook for data fetching
- `useDataMutation`: Generic hook for data mutations
- `useInvalidateQueries`: Utility for cache invalidation

### 3. API Service (`lib/api.ts`)

- Centralized API functions for all endpoints
- Error handling and type safety
- Easy to customize for your backend

### 4. Specific Query Hooks (`lib/queries.ts`)

- Pre-built hooks for products, categories, brands, clients, and services
- Automatic cache invalidation
- Optimistic updates support

## Usage Examples

### Basic Data Fetching

```tsx
import { useProducts } from "@/lib/queries";

function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Data Mutations

```tsx
import { useCreateProduct } from "@/lib/queries";

function CreateProductForm() {
  const createProduct = useCreateProduct();

  const handleSubmit = (formData) => {
    createProduct.mutate(formData, {
      onSuccess: () => {
        // Form will be reset automatically
        // Cache will be invalidated
      },
      onError: (error) => {
        console.error("Failed to create product:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={createProduct.isPending}>
        {createProduct.isPending ? "Creating..." : "Create Product"}
      </button>
    </form>
  );
}
```

### Conditional Queries

```tsx
import { useProduct } from "@/lib/queries";

function ProductDetails({ productId }: { productId?: string }) {
  const { data: product, isLoading } = useProduct(productId);

  // Query only runs when productId is provided
  if (!productId) return <div>No product selected</div>;
  if (isLoading) return <div>Loading product...</div>;

  return <div>{product.name}</div>;
}
```

### Search with Debouncing

```tsx
import { useSearchProducts } from "@/lib/queries";
import { useState, useEffect } from "react";

function SearchProducts() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const { data: results, isLoading } = useSearchProducts(debouncedQuery);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {isLoading && <div>Searching...</div>}
      {results?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

## Available Query Hooks

### Products

- `useProducts()` - Get all products
- `useProduct(id)` - Get single product
- `useProductsByCategory(categoryId)` - Get products by category
- `useSearchProducts(query)` - Search products

### Categories

- `useCategories()` - Get all categories
- `useCategory(id)` - Get single category
- `useSubcategories(categoryId)` - Get subcategories

### Brands

- `useBrands()` - Get all brands
- `useBrand(id)` - Get single brand

### Clients

- `useClients()` - Get all clients
- `useClient(id)` - Get single client

### Services

- `useServices()` - Get all services
- `useService(id)` - Get single service
- `useServicesByCategory(categoryId)` - Get services by category

## Available Mutation Hooks

### Products

- `useCreateProduct()` - Create new product
- `useUpdateProduct()` - Update existing product
- `useDeleteProduct()` - Delete product

## Configuration

### Query Client Options

The query client is configured with these defaults:

- `staleTime`: 1 minute (data considered fresh for 1 minute)
- `gcTime`: 10 minutes (data kept in cache for 10 minutes)
- `retry`: 1 attempt on failure
- `refetchOnWindowFocus`: false

### Environment Variables

Set your API base URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Best Practices

1. **Use the provided hooks** instead of creating new ones
2. **Handle loading and error states** in your components
3. **Use mutations for data changes** (create, update, delete)
4. **Leverage automatic cache invalidation** for real-time updates
5. **Use conditional queries** to avoid unnecessary API calls

## Development Tools

The setup includes React Query DevTools that you can access in development:

- Shows all queries and their status
- Allows manual cache invalidation
- Displays query timing and performance metrics

## Customization

### Adding New API Endpoints

1. Add functions to `lib/api.ts`
2. Create corresponding hooks in `lib/queries.ts`
3. Use the generic hooks for custom behavior

### Modifying Query Behavior

Override options in individual hooks:

```tsx
const { data } = useProducts({
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 30 * 60 * 1000, // 30 minutes
});
```

### Custom Error Handling

```tsx
const { data, error } = useProducts({
  onError: (error) => {
    // Custom error handling
    console.error("Products fetch failed:", error);
  },
});
```

## Troubleshooting

### Common Issues

1. **Query not running**: Check if the `enabled` condition is met
2. **Cache not updating**: Ensure mutations invalidate the correct queries
3. **TypeScript errors**: Make sure your API types match the expected data structure

### Debug Mode

Enable debug mode in development by setting:

```tsx
// In your query provider
<QueryClientProvider client={queryClient}>
  {children}
  <ReactQueryDevtools initialIsOpen={true} />
</QueryClientProvider>
```

## Migration from Other State Management

If you're migrating from other state management solutions:

1. **Replace useState/useEffect** with query hooks for server state
2. **Keep local state** for UI state (forms, modals, etc.)
3. **Use mutations** instead of manual API calls
4. **Leverage automatic caching** instead of manual state updates

This setup provides a robust foundation for managing server state in your Next.js application with automatic caching, background updates, and optimistic updates.
