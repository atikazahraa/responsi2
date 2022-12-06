import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengeluaranTambahPage } from './pengeluaran-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PengeluaranTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengeluaranTambahPageRoutingModule {}
