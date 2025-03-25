
import { ProductData } from './types';
import { Product } from './product';

export async function fetchProducts(): Promise<Product[]> {
    const response: Response = await fetch('https://dummyjson.com/products');
    const data: { products: ProductData[] } = await response.json();
    console.log("Kategorier från API:", data.products.map(p => p.category)); 
    const products: Product[] = data.products.map((item: ProductData): Product => new Product(item));
    return products;
  }