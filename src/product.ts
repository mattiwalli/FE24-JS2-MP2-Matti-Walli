
import { ProductData } from './types';

export class Product {
 
  private _title: string;
  private _imageUrl: string;
  private _stock: number;
  private _price: number;
  private _discountPercentage: number;
  private _category: string;
  private _rating: number;

  constructor(data: ProductData) {
    this._title = data.title;
    this._imageUrl = data.thumbnail;
    this._stock = data.stock;
    this._price = data.price;
    this._discountPercentage = data.discountPercentage;
    this._category = data.category;
    this._rating = data.rating;
  }

  
  public get title(): string {
    return this._title;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public get stock(): number {
    return this._stock;
  }

  public get price(): number {
    return this._price;
  }

  public get discountPercentage(): number {
    return this._discountPercentage;
  }

  public get category(): string {
    return this._category;
  }

  public get rating(): number {
    return this._rating;
  }

 
  public getDiscountedPrice(): number {
    const discountedPrice: number = this._price * (1 - this._discountPercentage / 100);
    return parseFloat(discountedPrice.toFixed(2));
  }

  // Metod: Uppdatera lagersaldo (minskar med angivet belopp, t.ex. -1 vid köp)
  public updateStock(amount: number): void {
    // Säkerställ att saldot inte blir negativt
    if (amount < 0 && Math.abs(amount) > this._stock) {
      this._stock = 0;
    } else {
      this._stock += amount;
      if (this._stock < 0) {
        this._stock = 0;
      }
    }
  }
}
