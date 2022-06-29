import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DTO } from '../../dto/evalute-shop/evalute-shop.dto';



@Injectable({
  providedIn: 'root'
})

export class ReviewShopService {

  //API url
  private listReviewShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/list-review-shop'

  constructor(private http: HttpClient) {}

  getListReviewShop(pageIndex: number, pageSize: number, search?: string, status?: number, rating?: number): Observable<DTO> {
    let result = `${this.listReviewShopUrl}${this.getParams(pageIndex, pageSize, search, status, rating)}`;
    return this.http.get<DTO>(`${result}`);
  }

  getParams(pageIndex: number, pageSize: number, searchText?: string, statusFilter?: number, ratingFilter?: number) {
    let skipCount = (pageIndex-1)*pageSize
    let result = `?SkipCount=${skipCount}&MaxResultCount=${pageSize}`
    if (searchText) {
      result += `&filter=customerName~contains~${searchText}`
    }
    if(ratingFilter){
      result += `&filter=rating~eq~${ratingFilter}`
    }
    if (statusFilter) {
      result += `&filter=status~eq~${statusFilter}`;
    }
    return result
  }

}
