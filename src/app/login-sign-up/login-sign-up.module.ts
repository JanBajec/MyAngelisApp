import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignUpPageRoutingModule } from './login-sign-up-routing.module';

import { LoginSignUpPage } from './login-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSignUpPageRoutingModule
  ],
  declarations: [LoginSignUpPage]
})
export class LoginSignUpPageModule {}
