import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMemoriaRamPage } from './view-memoria-ram.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMemoriaRamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMemoriaRamPageRoutingModule {}
