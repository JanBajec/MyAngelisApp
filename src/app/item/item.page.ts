import {Component, OnInit} from '@angular/core';
import {DrawerState} from 'ion-bottom-drawer';
import {Data} from '../data';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {CartService} from '../cart.service';
import {CartProductId} from '../cart-product-id';
import {ActivatedRoute} from '@angular/router';
import {Color} from '../color';
import {Size} from '../size';

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
  dockedHeight = 220;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 150;

  item: Data;
  itemId = '';
  colors: Color[] = [];
  sizes: Size[] = [];

  constructor(private location: Location, private dataService: DataService, private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.item = this.dataService.getProductById(params.id));
    this.getColors();
    this.getSizes();
    // this.item = this.getItem('c3d444c3d2774263ab93598fb0705370');
  }

  onBack(){
    this.location.back();
  }

  getColors(){
    for (const color of this.item.colors) {
      const newColor = new Color(color);
      this.colors.push(newColor);
    }
    this.colors[0].ticked = true;
  }

  getSizes(){
    for (const size of this.item.sizes) {
      const newSize = new Size(size);
      this.sizes.push(newSize);
    }
    this.sizes[0].ticked = true;
  }

  changeColor(indexChange: number){
    this.colors.forEach((value, index) => {
      if (index === indexChange) {value.ticked = true; }
      else {value.ticked = false; }
    });
  }

  changeSize(indexChange: number){
    this.sizes.forEach((value, index) => {
      if (index === indexChange) {value.ticked = true; }
      else {value.ticked = false; }
    });
  }

  checkIfDrawerTop(){
    if (this.drawerState === DrawerState.Top) {return true; }
    else {return false; }
  }

  drawerToDocked(){
    this.drawerState = DrawerState.Docked;
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
