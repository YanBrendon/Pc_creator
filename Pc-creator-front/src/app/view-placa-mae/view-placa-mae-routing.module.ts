import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPlacaMaePage } from './view-placa-mae.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPlacaMaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPlacaMaePageRoutingModule {}
