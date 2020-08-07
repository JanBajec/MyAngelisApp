import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.page.html',
  styleUrls: ['./login-sign-up.page.scss'],
})
export class LoginSignUpPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this.location.back();
  }

}
