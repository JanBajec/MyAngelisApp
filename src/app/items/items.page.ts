import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Data} from '../data';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getProducts();
  }

  getPrice(itemId: string): number {
    return this.dataService.getPrice(itemId);
  }

}
