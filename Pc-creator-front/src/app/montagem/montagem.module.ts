import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontagemPageRoutingModule } from './montagem-routing.module';

import { MontagemPage } from './montagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontagemPageRoutingModule
  ],
  declarations: [MontagemPage]
})
export class MontagemPageModule {}
