import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacaMaePageRoutingModule } from './placa-mae-routing.module';

import { PlacaMaePage } from './placa-mae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaMaePageRoutingModule
  ],
  declarations: [PlacaMaePage]
})
export class PlacaMaePageModule {}
