import {Injectable} from '@angular/core';
// import {LocalStorage, LocalStorageService} from 'angular-web-storage';
import {DataService} from './data.service';
import {CartProductId} from './cart-product-id';
import {CartProduct} from './cart-product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor( private dataService: DataService) {} // public local: LocalStorageService,

  public cartProductIds: CartProductId[] = [];
  totalAmount: number;

  addToCart(productId: CartProductId): void {
    this.cartProductIds = this.getCart();
    if (this.cartProductIds === null) {this.cartProductIds = []; }
    this.cartProductIds.push(productId);
    // this.local.set('products', this.productIds);
  }

  getCart(): CartProductId[] {
    // return this.local.get('products');
    return this.cartProductIds;
  }

  getNumOfItemsInCart(): number {
    return this.cartProductIds.length;
    console.log(this.cartProductIds.length);
  }

  checkIfAlreadyInCart(productId: string): boolean {
    this.cartProductIds = this.getCart();
    if (this.cartProductIds === null ) {return false; }
    for (const product of this.cartProductIds) {
      if (productId === product.itemId) {return true; }
    }
    return false;
  }

  checkout(): void {
    // to do
    // this.local.clear();
    this.totalAmount = this.getTotalAmount();
  }

  removeFromCart(productId: string): void {
    this.cartProductIds = this.getCart();
    for (let i = 0; i < this.cartProductIds.length; i++) {
      if (this.cartProductIds[i].itemId === productId) { delete this.cartProductIds[i]; }
    }
    // this.local.set('products', this.productIds);
    this.totalAmount = this.getTotalAmount();
  }

  getTotalAmount(): number {
    const productIds: CartProductId[] = this.getCart();
    let totalAmount = 0;
    if (productIds === null) {return totalAmount; }
    for (const productId of productIds) {
      const tempAmount = this.dataService.getPrice(productId.itemId) * productId.quantity;
      totalAmount = totalAmount + tempAmount;
    }
    return totalAmount;
  }

  quantityUpdate(cartProductId: string, plus: boolean){
    for (const cartProduct of this.cartProductIds){
      if (cartProduct.itemId === cartProductId){
        if (plus){
          cartProduct.quantity = cartProduct.quantity + 1;
        } else {
          if (cartProduct.quantity > 1) {
            cartProduct.quantity = cartProduct.quantity - 1;
          }
        }
      }
    }
  }

  removeItemsFromCart(items: any[]){
    console.log(this.cartProductIds);
    let index = 0;
    for (const item of items) {
      console.log(item);
      if ( item === true ) {
        this.cartProductIds.splice(index, 1);
        index--;
      }
      index++;
    }
  }
}
