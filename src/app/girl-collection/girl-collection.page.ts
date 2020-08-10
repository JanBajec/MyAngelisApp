import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-girl-collection',
  templateUrl: './girl-collection.page.html',
  styleUrls: ['./girl-collection.page.scss'],
})
export class GirlCollectionPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

}
