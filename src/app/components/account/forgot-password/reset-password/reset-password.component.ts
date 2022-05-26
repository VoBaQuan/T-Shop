import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class ResetPasswordComponent implements OnInit {
  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: '+84' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
}
