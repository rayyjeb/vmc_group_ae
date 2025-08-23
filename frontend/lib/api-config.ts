// API configuration for connecting to the backend
export const API_CONFIG = {
  // Backend base URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",

  // API endpoints
  ENDPOINTS: {
    // Authentication
    AUTH: {
      LOGIN: "/api/auth/login",
      LOGOUT: "/api/auth/logout",
      ME: "/api/auth/me",
    },

    // Products
    PRODUCTS: {
      BASE: "/api/products",
      BY_ID: (id: string) => `/api/products/${id}`,
    },

    // Categories
    CATEGORIES: {
      BASE: "/api/categories",
      BY_ID: (id: string) => `/api/categories/${id}`,
    },

    // Subcategories
    SUBCATEGORIES: {
      BASE: "/api/subcategories",
      BY_ID: (id: string) => `/api/subcategories/${id}`,
    },
  },

  // Request configuration
  REQUEST_CONFIG: {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 seconds
  },
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint: string): string => {
  const fullUrl = `${API_CONFIG.BASE_URL}${endpoint}`;
  return fullUrl;
};

// Helper function to get auth headers
export const getAuthHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};
