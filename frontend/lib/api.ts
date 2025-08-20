// API service functions connecting to the backend
import { publicApi } from "./backend-api";
import { Product, Category } from "@/types/products";

// Product-related API functions
export const productApi = {
  // Get all products
  getAll: async (): Promise<Product[]> => {
    try {
      const response = await publicApi.getProducts();
      return response.products;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },

  // Get product by ID
  getById: async (id: string): Promise<Product | undefined> => {
    try {
      return await publicApi.getProduct(id);
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return undefined;
    }
  },

  // Get products by category
  getByCategory: async (categoryId: string): Promise<Product[]> => {
    try {
      const response = await publicApi.getProducts({ category: categoryId });
      return response.products;
    } catch (error) {
      console.error("Failed to fetch products by category:", error);
      return [];
    }
  },

  // Search products
  search: async (query: string): Promise<Product[]> => {
    try {
      const response = await publicApi.getProducts({ search: query });
      return response.products;
    } catch (error) {
      console.error("Failed to search products:", error);
      return [];
    }
  },

  // Get featured products
  getFeatured: async (): Promise<Product[]> => {
    try {
      const response = await publicApi.getProducts({ featured: true });
      return response.products;
    } catch (error) {
      console.error("Failed to fetch featured products:", error);
      return [];
    }
  },

  // Create product (admin only - moved to admin API)
  create: async (product: Omit<Product, "id">): Promise<Product> => {
    throw new Error("Product creation is only available through admin API");
  },

  // Update product (admin only - moved to admin API)
  update: async (id: string, product: Partial<Product>): Promise<Product> => {
    throw new Error("Product updates are only available through admin API");
  },

  // Delete product (admin only - moved to admin API)
  delete: async (id: string): Promise<void> => {
    throw new Error("Product deletion is only available through admin API");
  },
};

// Category-related API functions
export const categoryApi = {
  // Get all categories
  getAll: async (): Promise<Category[]> => {
    try {
      return await publicApi.getCategories();
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      return [];
    }
  },

  // Get category by ID
  getById: async (id: string): Promise<Category | undefined> => {
    try {
      return await publicApi.getCategory(id);
    } catch (error) {
      console.error("Failed to fetch category:", error);
      return undefined;
    }
  },

  // Get subcategories
  getSubcategories: async (
    categoryId: string
  ): Promise<Category["subcategories"]> => {
    try {
      const category = await publicApi.getCategory(categoryId);
      return category?.subcategories || [];
    } catch (error) {
      console.error("Failed to fetch subcategories:", error);
      return [];
    }
  },
};

// Brand-related API functions
export const brandApi = {
  // Get all brands (using categories as brands)
  getAll: async (): Promise<any[]> => {
    try {
      const categories = await categoryApi.getAll();
      return categories.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        image: category.image,
      }));
    } catch (error) {
      console.error("Failed to fetch brands:", error);
      return [];
    }
  },

  // Get brand by ID
  getById: async (id: string): Promise<any> => {
    try {
      const category = await categoryApi.getById(id);
      if (!category) return undefined;

      return {
        id: category.id,
        name: category.name,
        description: category.description,
        image: category.image,
      };
    } catch (error) {
      console.error("Failed to fetch brand:", error);
      return undefined;
    }
  },
};

// Client-related API functions (keeping mock data for now)
export const clientApi = {
  // Get all clients
  getAll: async (): Promise<any[]> => {
    // Mock clients data - can be replaced with backend API later
    return [
      { id: "client-1", name: "Client A", type: "Corporate" },
      { id: "client-2", name: "Client B", type: "Individual" },
    ];
  },

  // Get client by ID
  getById: async (id: string): Promise<any> => {
    const clients = await clientApi.getAll();
    return clients.find((client) => client.id === id);
  },
};

// Service-related API functions (keeping mock data for now)
export const serviceApi = {
  // Get all services
  getAll: async (): Promise<any[]> => {
    // Mock services data - can be replaced with backend API later
    return [
      { id: "service-1", name: "Consulting", category: "professional" },
      { id: "service-2", name: "Installation", category: "technical" },
    ];
  },

  // Get service by ID
  getById: async (id: string): Promise<any> => {
    const services = await serviceApi.getAll();
    return services.find((service) => service.service === id);
  },

  // Get services by category
  getByCategory: async (categoryId: string): Promise<any[]> => {
    const services = await serviceApi.getAll();
    return services.filter((service) => service.category === categoryId);
  },
};
