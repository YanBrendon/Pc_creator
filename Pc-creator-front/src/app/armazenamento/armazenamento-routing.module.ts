import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmazenamentoPage } from './armazenamento.page';

const routes: Routes = [
  {
    path: '',
    component: ArmazenamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmazenamentoPageRoutingModule {}
