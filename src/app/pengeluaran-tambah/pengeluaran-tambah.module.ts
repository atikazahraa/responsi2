import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengeluaranTambahPageRoutingModule } from './pengeluaran-tambah-routing.module';

import { PengeluaranTambahPage } from './pengeluaran-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengeluaranTambahPageRoutingModule
  ],
  declarations: [PengeluaranTambahPage]
})
export class PengeluaranTambahPageModule {}
