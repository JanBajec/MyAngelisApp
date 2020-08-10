import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirlCollectionPageRoutingModule } from './girl-collection-routing.module';

import { GirlCollectionPage } from './girl-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirlCollectionPageRoutingModule
  ],
  declarations: [GirlCollectionPage]
})
export class GirlCollectionPageModule {}
