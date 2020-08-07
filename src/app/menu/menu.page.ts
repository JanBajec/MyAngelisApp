import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  logedIn = true;
  username = 'Jan Bajec';
  userPhoto = 'https://yt3.ggpht.com/a/AGF-l78oVwbPSvSK9d6VMJ6wHoxIaqxMut027C89Vw=s900-c-k-c0xffffffff-no-rj-mo';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

  logout(){
    console.log('logout');
  }

}
