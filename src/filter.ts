
import { Product } from './product';

export function filterByCategory(category: string, products: Product[]): Product[] {
  return products.filter((product: Product): boolean => product.category === category);
}

export function filterByMaxPrice(maxPrice: number, products: Product[]): Product[] {
  return products.filter((product: Product): boolean => product.price <= maxPrice);
}

export function sortByPriceAscending(products: Product[]): Product[] {
  return products.slice().sort((a: Product, b: Product): number => a.price - b.price);
}

export function sortByPriceDescending(products: Product[]): Product[] {
  return products.slice().sort((a: Product, b: Product): number => b.price - a.price);
}

export function sortByRatingAscending(products: Product[]): Product[] {
  return products.slice().sort((a: Product, b: Product): number => a.rating - b.rating);
}

export function sortByRatingDescending(products: Product[]): Product[] {
  return products.slice().sort((a: Product, b: Product): number => b.rating - a.rating);
}
