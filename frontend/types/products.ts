export interface Product {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  stock: number;
  featured?: boolean;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  _id?: string; // MongoDB _id field
  name: string;
  description: string;
  image: string;
}
