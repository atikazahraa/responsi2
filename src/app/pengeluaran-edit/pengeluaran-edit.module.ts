import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengeluaranEditPageRoutingModule } from './pengeluaran-edit-routing.module';

import { PengeluaranEditPage } from './pengeluaran-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengeluaranEditPageRoutingModule
  ],
  declarations: [PengeluaranEditPage]
})
export class PengeluaranEditPageModule {}
