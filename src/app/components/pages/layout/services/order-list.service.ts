import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) { }
  getOrderList(): Observable<any>{
    return this.http.get<any>('https://tshop-dev.tpos.dev/api/v1/appshop-order/list')
  }
}
