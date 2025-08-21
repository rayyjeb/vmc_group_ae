export interface AdminProduct {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  category: string | AdminCategory; 
  image: string;
  images?: string[];
  stock: number;
  featured?: boolean;
  rating?: number;
  price?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminCategory {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: AdminUser;
  message?: string;
}

export interface AdminUser {
  _id?: string;
  id?: string;
  email: string;
  name: string;
  role: "admin" | "super_admin";
  createdAt?: string;
  updatedAt?: string;
}
