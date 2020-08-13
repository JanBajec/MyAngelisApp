import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {Quality} from '../quality';
import {Color} from '../color';
import {Size} from '../size';
import {FilterService} from '../filter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  searchInput: string = null;

  knobValues: any = {
    lower: 0,
    upper: 300
  };

  qualities: Quality[] = [
    {
      quality: 'cotton',
      ticked: false
    },
    {
      quality: 'wool',
      ticked: false
    },
    {
      quality: 'leather',
      ticked: false
    },
    {
      quality: 'polyester',
      ticked: false
    },
    {
      quality: 'poly/cotton',
      ticked: false
    },
    {
      quality: 'rayon',
      ticked: false
    },
  ];

  colors: Color[] = [
    {
      color: 'green',
      ticked: false
    },
    {
      color: 'blue',
      ticked: false
    },
    {
      color: 'red',
      ticked: false
    },
    {
      color: 'brown',
      ticked: false
    },
    {
      color: 'black',
      ticked: false
    },
    {
      color: 'purple',
      ticked: false
    },
    {
      color: 'pink',
      ticked: false
    },
  ];

  sizes: Size[] = [
    {
      size: 'XS',
      ticked: false
    },
    {
      size: 'S',
      ticked: false
    },
    {
      size: 'M',
      ticked: false
    },
    {
      size: 'L',
      ticked: false
    },
    {
      size: 'XL',
      ticked: false
    },
    {
      size: 'XXL',
      ticked: false
    },
  ];

  constructor(private location: Location, private filterService: FilterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.searchInput = params.search);
  }

  onBack(){
    this.location.back();
  }

  changeQuality(indexChange: number) {
    this.qualities.forEach((value, index) => {
      if (index === indexChange) { value.ticked = true; }
      else { value.ticked = false; }
    });
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

  colorUntick(indexChange: number){
    this.colors.forEach((value, index) => {
      if (index === indexChange) {value.ticked = false; }
    });
  }

  sizeUntick(indexChange: number){
    this.sizes.forEach((value, index) => {
      if (index === indexChange) {value.ticked = false; }
    });
  }

  applyFilter(){
    this.filterService.setHigh(this.knobValues.upper);
    this.filterService.setLow(this.knobValues.lower);
    this.qualities.forEach((value, index) => {
      if (value.ticked){
        this.filterService.setQuality(value.quality);
      }
    });
    this.colors.forEach((value, index) => {
      if (value.ticked){
        this.filterService.setColor(value.color);
      }
    });
    this.sizes.forEach((value, index) => {
      if (value.ticked){
        this.filterService.setSize(value.size);
      }
    });
    this.filterService.filterEnabled = true;
  }

}
