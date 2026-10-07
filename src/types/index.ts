export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface Order {
  id: string;
  total: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  createdAt: string;
}
