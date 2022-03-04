import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriaRanPage } from './memoria-ran.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRanPageRoutingModule {}
