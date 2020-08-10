import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newArrivalsSubpage = false;
  newArrivalsSubpageText1 = false;
  newArrivalsSubpageText2 = false;
  newArrivalsSubpageText3 = false;
  bestSellerSubpage = false;

  womenSubpage = false;

  menSubpage = false;

  kidsSubpage = false;

  constructor() {}

}
