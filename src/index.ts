import { fetchProducts } from './api';
import { displayProducts } from './ui';
import { filterByCategory, filterByMaxPrice, sortByPriceAscending, sortByPriceDescending, sortByRatingAscending, sortByRatingDescending } from './filter';
import { Product } from './product';

let allProducts: Product[] = [];

async function init(): Promise<void> {
  try {
    allProducts = await fetchProducts();
    displayProducts(allProducts);
  } catch (error: unknown) {
    console.error('Error fetching products:', error);
  }
}

function applyFilters(): void {
  let filteredProducts = [...allProducts];

  const category = (document.getElementById('category-filter') as HTMLSelectElement).value;
  const maxPrice = parseFloat((document.getElementById('max-price-filter') as HTMLInputElement).value);
  const sortOption = (document.getElementById('sort-filter') as HTMLSelectElement).value;

  if (category) {
    filteredProducts = filterByCategory(category, filteredProducts);
  }

  if (!isNaN(maxPrice)) {
    filteredProducts = filterByMaxPrice(maxPrice, filteredProducts);
  }

  switch (sortOption) {
    case 'price-asc':
      filteredProducts = sortByPriceAscending(filteredProducts);
      break;
    case 'price-desc':
      filteredProducts = sortByPriceDescending(filteredProducts);
      break;
    case 'rating-asc':
      filteredProducts = sortByRatingAscending(filteredProducts);
      break;
    case 'rating-desc':
      filteredProducts = sortByRatingDescending(filteredProducts);
      break;
  }

  displayProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('apply-filters')?.addEventListener('click', applyFilters);
});

init();
