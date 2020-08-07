import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  username = 'Jan Bajec';
  userPhoto = 'https://yt3.ggpht.com/a/AGF-l78oVwbPSvSK9d6VMJ6wHoxIaqxMut027C89Vw=s900-c-k-c0xffffffff-no-rj-mo';
  userAddress = 'Trzaske cesta 123';
  userTelNum = '031 999 333';
  userZipCode = '6230';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

}
