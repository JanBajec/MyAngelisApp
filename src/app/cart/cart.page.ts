import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Data} from '../data';
import {CartService} from '../cart.service';
import {DataService} from '../data.service';
import {CartProduct} from '../cart-product';
import {CartProductId} from '../cart-product-id';
import {Color} from '../color';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  edit = false;
  cartProducts: CartProduct[] = [];
  cartSubtotalAmount: number;
  checkedItems: number[] = [];

  constructor(private location: Location, private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    this.cartProducts = this.getMyCart();
    this.cartSubtotalAmount = this.getSubtotalAmount();
  }

  onBack(){
    this.location.back();
  }

  getPrice(productId: string): number {
    return this.dataService.getPrice(productId);
  }

  getPriceWithQuantity(productId: CartProduct): number {
    return this.dataService.getPrice(productId.item.id) * productId.quantity;
  }

  getSubtotalAmount(): number {
    return this.cartService.getTotalAmount();
  }

  getMyCart(): CartProduct[] {
    const productIds: CartProductId[] = this.getProductIds();
    return this.dataService.getCartProductsById(productIds);
  }

  getProductIds(): CartProductId[] {
    return this.cartService.getCart();
  }

  quantityUpdate(cartProductId: string, plus: boolean){
    this.cartService.quantityUpdate(cartProductId, plus);
    this.cartProducts = this.getMyCart();
    this.cartSubtotalAmount = this.getSubtotalAmount();
  }

  delete(){
    this.cartService.removeItemsFromCart(this.checkedItems);
    this.cartProducts = this.getMyCart();
    this.cartSubtotalAmount = this.getSubtotalAmount();
    this.checkedItems = [];
  }

}
