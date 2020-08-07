import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSignUpPage } from './login-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignUpPageRoutingModule {}
