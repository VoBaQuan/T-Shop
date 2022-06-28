import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DTO } from '../../dto/evalute-shop/evalute-shop.dto';



@Injectable({
  providedIn: 'root'
})

export class ReviewShopService {

  // url API
  private listReviewShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/list-review-shop'

  constructor(private http: HttpClient) { }

  getListReviewShop(pageIndex: number, pageSize: number, search?: string, status?: number): Observable<DTO> {
    let result = `${this.listReviewShopUrl}${this.getParams(pageIndex, pageSize, search, status)}`;
    return this.http.get<DTO>(`${result}`);
  }

  getParams(pageIndex: number, pageSize: number, searchText?: string, statusFilter?: number) {
    let skipCount = (pageIndex-1)*pageSize
    let result = `?SkipCount=${skipCount}&MaxResultCount=${pageSize}`
    if (searchText) {
      result += `&filter=customerName~contains~${searchText}`
    }
    if (statusFilter) {
      result += `&filter=status~eq~${statusFilter}`;
    }
    return result
  }

}
