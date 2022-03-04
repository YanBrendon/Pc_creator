import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontagemPage } from './montagem.page';

const routes: Routes = [
  {
    path: '',
    component: MontagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontagemPageRoutingModule {}
