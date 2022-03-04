import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessadorPageRoutingModule } from './processador-routing.module';

import { ProcessadorPage } from './processador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessadorPageRoutingModule
  ],
  declarations: [ProcessadorPage]
})
export class ProcessadorPageModule {}
