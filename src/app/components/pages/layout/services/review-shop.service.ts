import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DTO } from '../../dto/evalute-shop/evalute-shop.dto';



@Injectable({
  providedIn: 'root'
})

export class ReviewShopService {

  private listReviewShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/list-review-shop'

  constructor(private http: HttpClient) { }
  
  getListReviewShop(pageIndex: number,pageSize: number,search: string): Observable<DTO> {
    let url =  `${this.listReviewShopUrl}${this.getParams(pageIndex, pageSize, search)}`;
    return this.http.get<DTO>(`${url}`);
  }

  getParams(pageIndex:number, pageSize:number, searchText?: string){
    let url = `?SkipCount=${pageIndex}&MaxResultCount=${pageSize}&filter=customerName~contains~${searchText}`;
    return url;
  }

}
