import { Product } from './Product';

export interface Root {
  products: Product[]
  total: number
  skip: number
  limit: number
}
