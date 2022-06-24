import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListShopService {

  private listShopUrl = 'https://tshop-dev.tpos.dev/api/v1/app-shops'

  constructor(private http: HttpClient) { }

  getListShop(){
    return this.http.get<any>(this.listShopUrl)
  }
}
