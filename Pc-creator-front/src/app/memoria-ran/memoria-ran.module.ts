import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriaRanPageRoutingModule } from './memoria-ran-routing.module';

import { MemoriaRanPage } from './memoria-ran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRanPageRoutingModule
  ],
  declarations: [MemoriaRanPage]
})
export class MemoriaRanPageModule {}
