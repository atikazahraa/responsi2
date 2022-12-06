import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  apiURL() {
    return "http://localhost/pengeluaran/";
  }

  getPengeluaran(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  deletePengeluaran(id: any){
    return this.http.delete(this.apiURL()+'/hapus.php?id=' + id);
  }
  
  ambilPengeluaran(id: any){
    return this.http.get(this.apiURL()+'/lihat.php?id=' + id);
  }
}