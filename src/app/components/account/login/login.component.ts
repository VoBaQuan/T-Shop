import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
