import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private infoUserUrl = "https://tshop-dev.tpos.dev/api/v1/app-user/init" 

  constructor(private http: HttpClient) { }

  // getDataUser(): Observable<any> {
  //   const accessToken = localStorage.getItem('accessToken')
  //   let headers: HttpHeaders = new HttpHeaders()
  //   headers = headers.append('Authorization','Bearer ' + accessToken)
  //   return this.http.get<any>(
  //     this.infoUserUrl, { headers }
  //   )
  // }

  getDataUser(){
    return this.http.get<any>(this.infoUserUrl)
  }

}

