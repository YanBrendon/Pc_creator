import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessadorPage } from './processador.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessadorPageRoutingModule {}
