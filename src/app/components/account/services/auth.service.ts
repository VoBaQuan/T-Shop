import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "https://tshop-dev.tpos.dev/api/v1/sign-in/password" 
  constructor(private http: HttpClient) { }

  loginUser(user: any){
    // console.log(user)
    return this.http.post<any>(this.loginUrl, user);
  }

}
