import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {Data} from '../data';
import {Location} from '@angular/common';
import {CartService} from '../cart.service';
import {FilterService} from '../filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  items: Data[] = [];
  searchInput: string;

  constructor(private route: ActivatedRoute, private dataService: DataService, private cartService: CartService, private location: Location,
              private filterService: FilterService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.items = this.dataService.getProductsBySearch(params.search));
    this.route.params.subscribe(params => this.searchInput = params.search);
    this.filterService.filterEnabled = false;
  }

  onBack(){
    this.location.back();
  }

  getPrice(id: string): number{
    return this.dataService.getPrice(id);
  }

  getNumOfItemsInCart(): number {
    return this.cartService.getNumOfItemsInCart();
  }


}
