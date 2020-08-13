import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Data} from '../data';
import {CartService} from '../cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: Data[];
  category: string;
  subCategories: string[];
  subCatTickedNum: number = null;

  constructor(private dataService: DataService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.category = params.category);
    this.subCategories = this.dataService.getSubcategoriesByName(this.category);
    this.items = this.dataService.getProductsByCategory(this.category);
  }

  getPrice(itemId: string): number {
    return this.dataService.getPrice(itemId);
  }

  getNumOfItemsInCart(): number {
    return this.cartService.getNumOfItemsInCart();
  }

  setSubCategory(num: number) {
    this.subCatTickedNum = num;
    this.items = this.dataService.getProductsBySubcategory(this.category, this.subCategories[num]);
  }

}
