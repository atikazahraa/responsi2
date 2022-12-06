import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-pengeluaran-edit',
  templateUrl: './pengeluaran-edit.page.html',
  styleUrls: ['./pengeluaran-edit.page.scss'],
})
export class PengeluaranEditPage implements OnInit {
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
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.ambilPengeluaran(this.id);
    })
  }

  ngOnInit() {
  }

  public optionFn() : void {
    let opt = this.jenis_pengeluaran;
  }

  ambilPengeluaran(id:any){
    this._apiService.ambilPengeluaran(id).subscribe((res: any)=>{
      console.log('Sukses', res);
      let pengeluaran = res;
      this.jenis_pengeluaran = pengeluaran.jenis_pengeluaran;
      this.jumlah_pengeluaran = pengeluaran.jumlah_pengeluaran;
      this.keterangan = pengeluaran.keterangan;
    },(error:any)=>{
      console.log('error', error);
      alert('Gagal Ambil Data');
    })
  }

  editPengeluaran(){
    let url = this._apiService.apiURL()+"/edit.php";
    Http.request({
      method : "POST",
      url : url,
      headers : {"Content-Type" : "application/json"},
      data : {
        id : this.id,
        jenis_pengeluaran : this.jenis_pengeluaran,
        jumlah_pengeluaran : this.jumlah_pengeluaran,
        keterangan : this.keterangan,
      },
    }).then((data: any)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Berhasil Edit Data Pengeluaran',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/pengeluaran');
    },(err)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Edit Data Pengeluaran',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }
}
