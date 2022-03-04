import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmazenamentoPageRoutingModule } from './armazenamento-routing.module';

import { ArmazenamentoPage } from './armazenamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmazenamentoPageRoutingModule
  ],
  declarations: [ArmazenamentoPage]
})
export class ArmazenamentoPageModule {}
