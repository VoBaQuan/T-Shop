import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataResultDTO } from '../../dto/evalute-shop/evalute-shop.dto';



@Injectable({
  providedIn: 'root'
})

export class ReviewShopService {

  //API url
  private listReviewShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/list-review-shop'
  private listStatusForShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/status-list-forshop'

  constructor(private http: HttpClient) { }

  getListDataReviewShop(pageIndex: number, pageSize: number, searchText?: string, searchNumberPhone?: string, status?: number, rating?: number): Observable<DataResultDTO> {
    let result = `${this.listReviewShopUrl}${this.getParams(pageIndex, pageSize, searchText, searchNumberPhone, status, rating)}`;
    return this.http.get<DataResultDTO>(`${result}`);
  }

  getListStatusForShop( params: { ShopId: any, Rating: any } ): Observable<any> {
    return this.http.post<any>(this.listStatusForShopUrl, params)
  }

  getParams(pageIndex: number, pageSize: number, searchText?: string, searchNumberPhone?: string, statusFilter?: number, ratingFilter?: number) {
    let skipCount = (pageIndex - 1) * pageSize
    let result = `?SkipCount=${skipCount}&MaxResultCount=${pageSize}`

    if (searchText || searchNumberPhone || statusFilter || ratingFilter) {
      result += '&filter='
    }

    if (searchText) {
      result += `customerName~contains~%27${searchText}%27`
      if (ratingFilter) {
        result += `~and~rating~eq~${ratingFilter}`
      }
      if (statusFilter) {
        result += `~and~status~eq~${statusFilter}`;
      }
      return result
    }

    if (searchNumberPhone) {
      result += `customerPhoneNumber~contains~%27${searchNumberPhone}%27`
      if (ratingFilter) {
        result += `~and~rating~eq~${ratingFilter}`
      }
      if (statusFilter) {
        result += `~and~status~eq~${statusFilter}`;
      }
      return result
    }

    if (ratingFilter) {
      result += `rating~eq~${ratingFilter}`
      if (statusFilter) {
        result += `~and~status~eq~${statusFilter}`
      }
      return result
    }

    if (statusFilter) {
      result += `status~eq~${statusFilter}`;
    }
    return result
  }

}
