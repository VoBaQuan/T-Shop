import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any> {
    return this.http.get<any>('https://62283f3f9fd6174ca81e6f0f.mockapi.io/api/test/data');
  }
}
