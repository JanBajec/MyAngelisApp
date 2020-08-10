import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManCollectionPage } from './man-collection.page';

const routes: Routes = [
  {
    path: '',
    component: ManCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManCollectionPageRoutingModule {}
