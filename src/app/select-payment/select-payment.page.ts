import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.page.html',
  styleUrls: ['./select-payment.page.scss'],
})
export class SelectPaymentPage implements OnInit {

  constructor(private location: Location, private profileService: ProfileService) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

  selectPaymentMethodInfo(paymentMethod: string){
    this.profileService.setCardMethod(paymentMethod);
  }

}
