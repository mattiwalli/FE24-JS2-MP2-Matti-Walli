// src/ui.ts
import { Product } from './product';



export function createProductCard(product: Product): HTMLElement {

  const template: HTMLTemplateElement | null = document.getElementById('product-card-template') as HTMLTemplateElement;
  if (!template) {
    throw new Error('Product card template not found');
  }

  // Klona templaten
  const cardFragment: DocumentFragment = template.content.cloneNode(true) as DocumentFragment;
  const card: HTMLElement = cardFragment.firstElementChild as HTMLElement;

  // Fyll i titel
  const titleElement: HTMLElement | null = card.querySelector('.product-title');
  if (titleElement) {
    titleElement.textContent = product.title;
  }

  // Fyll i bild
  const imageElement: HTMLImageElement | null = card.querySelector('.product-image');
  if (imageElement) {
    imageElement.src = product.imageUrl;
    imageElement.alt = product.title;
  }

  // Fyll i lagersaldo
  const stockElement: HTMLElement | null = card.querySelector('.product-stock');
  if (stockElement) {
    stockElement.textContent = `Lagersaldo: ${product.stock}`;
  }

  // Fyll i rabatterat pris
  const discountedPriceElement: HTMLElement | null = card.querySelector('.product-discounted-price');
  if (discountedPriceElement) {
    discountedPriceElement.textContent = `Rabatterat pris: $${product.getDiscountedPrice()}`;
  }

  // Konfigurera knappen för att lägga till produkten i kundvagnen
  const button: HTMLButtonElement | null = card.querySelector('.add-to-cart');
  if (button) {
    button.addEventListener('click', (): void => {
      product.updateStock(-1);
      if (stockElement) {
        stockElement.textContent = `Lagersaldo: ${product.stock}`;
      }
    });
  }

  return card;
}

export function displayProducts(products: Product[]): void {
  const container: HTMLElement | null = document.getElementById('product-container');
  if (!container) return;

  container.innerHTML = ''; // Rensa container för att undvika duplicering
  products.forEach((product: Product): void => {
    const card: HTMLElement = createProductCard(product);
    container.appendChild(card);
  });
}
