import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirlCollectionPage } from './girl-collection.page';

const routes: Routes = [
  {
    path: '',
    component: GirlCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirlCollectionPageRoutingModule {}
