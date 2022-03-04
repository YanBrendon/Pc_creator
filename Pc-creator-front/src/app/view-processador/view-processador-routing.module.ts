import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProcessadorPage } from './view-processador.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProcessadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProcessadorPageRoutingModule {}
