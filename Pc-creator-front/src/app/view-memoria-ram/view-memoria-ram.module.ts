import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMemoriaRamPageRoutingModule } from './view-memoria-ram-routing.module';

import { ViewMemoriaRamPage } from './view-memoria-ram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMemoriaRamPageRoutingModule
  ],
  declarations: [ViewMemoriaRamPage]
})
export class ViewMemoriaRamPageModule {}
