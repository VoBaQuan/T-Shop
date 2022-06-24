import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { request } from 'http';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('accessToken') != null){
        const token = localStorage.getItem('accessToken')
        const headers = new HttpHeaders()
            // .set('accessToken', token)
            .set('Authorization','Bearer ' + token)
            .set('shopid', '8155298472159123')
        const AuthRequest = request.clone({ headers: headers })
        return next.handle(AuthRequest)
    }else{
        return next.handle(request)
    }
  }
}