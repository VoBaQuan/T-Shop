import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class VerificationCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
