import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengeluaranEditPage } from './pengeluaran-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PengeluaranEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengeluaranEditPageRoutingModule {}
