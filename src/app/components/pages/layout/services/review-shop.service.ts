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
  
  getListReviewShop(
    pageIndex: number,
    pageSize: number,
    // sortField: string | null,
    // sortOrder: string | null,
    // filters: Array<{ key: string; value: string[] }>
  ): Observable<DTO> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`);
      // .append('sortField', `${sortField}`)
      // .append('sortOrder', `${sortOrder}`);
    // filters.forEach(filter => {
    //   filter.value.forEach(value => {
    //     params = params.append(filter.key, value);
    //   });
    // });
    let url =  `${this.listReviewShopUrl}?SkipCount=${pageIndex}&MaxResultCount=${pageSize}`
    return this.http.get<DTO>(`${url}`, { params })
  }

}
