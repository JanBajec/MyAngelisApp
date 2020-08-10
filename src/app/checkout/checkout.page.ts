import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  typeOfDelivery = 'Standard';
  deliveryDate = 'Saturday 27 - Tuesday 30';
  deliveryCost = 10;

  myProfile: Profile;

  paymentShowBool = false;
  checkoutStyle = 'bold';
  paymentStyle = 'normal';

  constructor(private location: Location, private profileService: ProfileService) { }

  ngOnInit() {
    this.myProfile = this.profileService.getMyProfile();
  }

  onBack(){
    this.location.back();
  }

  goToPayment(){
    this.paymentShowBool = true;
    this.checkoutStyle = 'normal';
    this.paymentStyle = 'bold';
    this.profileService.setMyProfile(this.myProfile);
  }

  goToCheckout(){
    this.paymentShowBool = false;
    this.checkoutStyle = 'bold';
    this.paymentStyle = 'normal';
  }

  everythingSelected(): boolean {
    return this.myProfile.card.number !== undefined && this.deliveryDate !== '' && this.myProfile.name !== ''; // samo za demo
  }


}
