import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

// export class listReviewShop {
//   CustomerName?: string
//   CustomerPhoneNumber?: string
//   rating?: number
//   ReviewMessage?: string
//   CreationTime?: Date
//   status?: number
// }

@Injectable({
  providedIn: 'root'
})

export class ReviewShopService {

  private listReviewShopUrl = 'https://tshop-dev.tpos.dev/api/v1/appshop-review/list-review-shop'
  
  constructor(private http: HttpClient) { }
  
  getListReviewShop(): Observable<any[]>{
    return this.http.get<any>(this.listReviewShopUrl)
  }
}
