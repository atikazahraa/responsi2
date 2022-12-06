import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-pengeluaran-tambah',
  templateUrl: './pengeluaran-tambah.page.html',
  styleUrls: ['./pengeluaran-tambah.page.scss'],
})
export class PengeluaranTambahPage implements OnInit {
  id : any;
  jenis_pengeluaran : any;
  jumlah_pengeluaran : any;
  keterangan : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  public optionFn() : void {
    let opt = this.jenis_pengeluaran;
  }

  addPengeluaran(){
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        jenis_pengeluaran: this.jenis_pengeluaran,
        jumlah_pengeluaran : this.jumlah_pengeluaran,
        keterangan: this.keterangan,
      },
    }).then((data) => {
      this.id = '';
      this.jenis_pengeluaran = '';
      this.jumlah_pengeluaran = '';
      this.keterangan = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input Data Pengeluaran',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/pengeluaran');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input Data Pengeluaran',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
