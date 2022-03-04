import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProcessadorPageRoutingModule } from './view-processador-routing.module';

import { ViewProcessadorPage } from './view-processador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProcessadorPageRoutingModule
  ],
  declarations: [ViewProcessadorPage]
})
export class ViewProcessadorPageModule {}
