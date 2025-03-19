// src/api.ts
import { ProductData } from './types';
import { Product } from './product';

export async function fetchProducts(): Promise<Product[]> {
  const response: Response = await fetch('https://dummyjson.com/products');
  const data: { products: ProductData[] } = await response.json();
  // Skapa en instans av Product för varje hämtad produkt
  const products: Product[] = data.products.map((item: ProductData): Product => new Product(item));
  return products;
}
