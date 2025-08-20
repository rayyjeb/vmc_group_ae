import { API_CONFIG, buildApiUrl, getAuthHeaders } from "./api-config";
import { Product, Category } from "@/types/products";
import {
  AdminProduct,
  AdminCategory,
  LoginCredentials,
  AuthResponse,
} from "@/types/admin";

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = buildApiUrl(endpoint);

  const config: RequestInit = {
    ...API_CONFIG.REQUEST_CONFIG,
    ...options,
    headers: {
      ...API_CONFIG.REQUEST_CONFIG.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const data = await response.json();
    // If the response has a data property, return it, otherwise return the whole response
    return data.data || data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

// Public API functions (no authentication required)
export const publicApi = {
  // Products
  getProducts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    featured?: boolean;
    search?: string;
    sort?: string;
    order?: "asc" | "desc";
  }): Promise<{ products: Product[]; pagination: any }> => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `${API_CONFIG.ENDPOINTS.PRODUCTS.BASE}?${queryString}`
      : API_CONFIG.ENDPOINTS.PRODUCTS.BASE;

    return apiRequest(endpoint);
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await apiRequest<{ product: Product }>(
      API_CONFIG.ENDPOINTS.PRODUCTS.BY_ID(id)
    );
    return response.product;
  },

  // Categories
  getCategories: async (): Promise<Category[]> => {
    console.log(
      "Calling getCategories with endpoint:",
      API_CONFIG.ENDPOINTS.CATEGORIES.BASE
    );
    console.log(
      "Full URL will be:",
      buildApiUrl(API_CONFIG.ENDPOINTS.CATEGORIES.BASE)
    );
    const response = await apiRequest<{ categories: Category[] }>(
      API_CONFIG.ENDPOINTS.CATEGORIES.BASE
    );
    console.log("getCategories response:", response);
    // The apiRequest function already extracts data.data, so response should be { categories: [...] }
    return response.categories || [];
  },

  getCategory: async (id: string): Promise<Category> => {
    const response = await apiRequest<{ category: Category }>(
      API_CONFIG.ENDPOINTS.CATEGORIES.BY_ID(id)
    );
    return response.category;
  },
};

// Admin API functions (authentication required)
export const adminApi = {
  // Authentication
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiRequest(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  logout: async (token: string): Promise<void> => {
    return apiRequest(API_CONFIG.ENDPOINTS.AUTH.LOGOUT, {
      method: "POST",
      headers: getAuthHeaders(token),
    });
  },

  getCurrentUser: async (token: string): Promise<any> => {
    return apiRequest(API_CONFIG.ENDPOINTS.AUTH.ME, {
      headers: getAuthHeaders(token),
    });
  },

  // Products (Admin)
  getProducts: async (
    token: string,
    params?: any
  ): Promise<{ products: AdminProduct[]; pagination: any }> => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `${API_CONFIG.ENDPOINTS.PRODUCTS.BASE}?${queryString}`
      : API_CONFIG.ENDPOINTS.PRODUCTS.BASE;

    return apiRequest(endpoint, {
      headers: getAuthHeaders(token),
    });
  },

  getProduct: async (token: string, id: string): Promise<AdminProduct> => {
    return apiRequest(API_CONFIG.ENDPOINTS.PRODUCTS.BY_ID(id), {
      headers: getAuthHeaders(token),
    });
  },

  createProduct: async (
    token: string,
    productData: FormData
  ): Promise<AdminProduct> => {
    return apiRequest(API_CONFIG.ENDPOINTS.PRODUCTS.BASE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type for FormData, let the browser set it
      },
      body: productData,
    });
  },

  updateProduct: async (
    token: string,
    id: string,
    productData: FormData
  ): Promise<AdminProduct> => {
    return apiRequest(API_CONFIG.ENDPOINTS.PRODUCTS.BY_ID(id), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type for FormData, let the browser set it
      },
      body: productData,
    });
  },

  deleteProduct: async (token: string, id: string): Promise<void> => {
    return apiRequest(API_CONFIG.ENDPOINTS.PRODUCTS.BY_ID(id), {
      method: "DELETE",
      headers: getAuthHeaders(token),
    });
  },

  // Categories (Admin)
  getCategories: async (token: string): Promise<AdminCategory[]> => {
    return apiRequest(API_CONFIG.ENDPOINTS.CATEGORIES.BASE, {
      headers: getAuthHeaders(token),
    });
  },

  createCategory: async (
    token: string,
    categoryData: FormData
  ): Promise<AdminCategory> => {
    return apiRequest(API_CONFIG.ENDPOINTS.CATEGORIES.BASE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type for FormData, let the browser set it
      },
      body: categoryData,
    });
  },

  updateCategory: async (
    token: string,
    id: string,
    categoryData: FormData
  ): Promise<AdminCategory> => {
    return apiRequest(API_CONFIG.ENDPOINTS.CATEGORIES.BY_ID(id), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type for FormData, let the browser set it
      },
      body: categoryData,
    });
  },

  deleteCategory: async (token: string, id: string): Promise<void> => {
    return apiRequest(API_CONFIG.ENDPOINTS.CATEGORIES.BY_ID(id), {
      method: "DELETE",
      headers: getAuthHeaders(token),
    });
  },
};
