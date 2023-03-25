export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category?: string;
  thumbnail: string;
  images?: string[];
  quantity?: number;
  author?: string;
  year?: number;
}

export interface NewProduct {
  author: string;
  year: number | string;
  price: number | string;
  discountPercentage: number | string;
  rating: number | string;
  stock: number | string;
  brand: string;
  id?: number;
  title: string;
  thumbnail: string;
}
