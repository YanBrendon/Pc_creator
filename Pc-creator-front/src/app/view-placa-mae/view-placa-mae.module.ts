import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPlacaMaePageRoutingModule } from './view-placa-mae-routing.module';

import { ViewPlacaMaePage } from './view-placa-mae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPlacaMaePageRoutingModule
  ],
  declarations: [ViewPlacaMaePage]
})
export class ViewPlacaMaePageModule {}
