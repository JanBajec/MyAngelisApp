import { Component, OnInit } from '@angular/core';
import {DrawerState} from 'ion-bottom-drawer';
import {Data} from '../data';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {CartService} from '../cart.service';
import {CartProduct} from '../cart-product';
import {CartProductId} from '../cart-product-id';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  slidesOptions = {
    direction: 'vertical'
  };

  shouldBounce = true;
  dockedHeight = 250;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 150;

  item: Data;
  itemId = '';

  constructor(private location: Location, private dataService: DataService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.item = this.dataService.getProductById(params.id));
    // this.item = this.getItem('c3d444c3d2774263ab93598fb0705370');
  }

  onBack(){
    this.location.back();
  }

  getItem(id: string): Data {
    return this.dataService.getProductById(id);
  }

  getPrice(productId: string): number {
    return this.dataService.getPrice(productId);
  }

  addToCart(itemId: string) {
    this.cartService.addToCart(new CartProductId(itemId));
  }

  checkIfItemInCart(itemId: string): boolean {
    return this.cartService.checkIfAlreadyInCart(itemId);
  }

}
