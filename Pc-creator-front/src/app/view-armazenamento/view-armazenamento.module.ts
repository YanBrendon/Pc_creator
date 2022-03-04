import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewArmazenamentoPageRoutingModule } from './view-armazenamento-routing.module';

import { ViewArmazenamentoPage } from './view-armazenamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewArmazenamentoPageRoutingModule
  ],
  declarations: [ViewArmazenamentoPage]
})
export class ViewArmazenamentoPageModule {}
