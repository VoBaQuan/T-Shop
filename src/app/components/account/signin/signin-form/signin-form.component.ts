import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class SigninFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
