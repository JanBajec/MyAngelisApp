import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.page.html',
  styleUrls: ['./man-collection.page.scss'],
})
export class ManCollectionPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

}
