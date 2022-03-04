import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaMaePage } from './placa-mae.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMaePageRoutingModule {}
