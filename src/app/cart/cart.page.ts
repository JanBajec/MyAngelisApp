import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../data.service';
import {Data} from '../data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  edit = false;
  cartItems: Data[] = [
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 1',
      'cardDescription': 'y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Enthoo-Evolv-X/Black/PH-ES518ETG-1z.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 8900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705370',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    },
    {
      'campaignId': 'CN201701188',
      'cardTitle': 'Title 2',
      'cardDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      'primaryMediaUrl': 'http://www.phanteks.com/images/product/Eclipse-P300-TG/P300_BK-1.jpg',
      'cardStartDate': '0001-01-01T00:00:00Z',
      'cardEndDate': '0001-01-01T00:00:00Z',
      'availableQuantity': 32,
      'likes': 10,
      'shares': 20,
      'views': 30,
      'subscribers': 0,
      'unSubscribers': 0,
      'open': 0,
      'discard': 0,
      'totalRevenue': 0,
      'listOfPlans': [
        {
          'price': {
            'amount': 900,
            'currency': 'EUR',
            'currencySymbol': ''
          }
        }
      ],
      'locations': [
        {
          'latitude': '',
          'longitude': '',
          'area': '',
          'city': '',
          'country': '',
          'placeId': 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
          'description': 'New York, New York, USA'
        }
      ],
      'currentWorkflow': 'saved',
      'campaignEndDate': '2017-02-28T18:59:59.999Z',
      'id': 'c3d444c3d2774263ab93598fb0705371',
      'userId': '5d6117b9ae114c83bb53cfdd8c722e78',
      'createdAt': '2017-02-06T11:14:45.131Z',
      'updatedAt': '2017-02-06T11:16:44.344Z'
    }
  ];

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

}
