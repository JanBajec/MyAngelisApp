import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  newArrivalsSubpage = false;
  newArrivalsSubpageText1 = false;
  newArrivalsSubpageText2 = false;
  newArrivalsSubpageText3 = false;
  bestSellerSubpage = false;

  womenSubpage = false;

  menSubpage = false;

  kidsSubpage = false;

  constructor(private cartService: CartService) {}

  ngOnInit(){

  }

  getNumOfItemsInCart(): number {
    return this.cartService.getNumOfItemsInCart();
  }

}
