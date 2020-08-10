import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit {

  myProfile: Profile;

  constructor(private location: Location, private profileService: ProfileService) { }

  ngOnInit() {
    this.myProfile = this.profileService.getMyProfile();
  }

  onBack(){
    this.location.back();
  }

  checkCardValid(){
    return this.myProfile.card.number !== '';
  }

  confirmCardInfo(){
    if (this.checkCardValid()) {
      this.profileService.setMyProfile(this.myProfile);
      this.location.back();
      this.location.back();
    }
  }

}
