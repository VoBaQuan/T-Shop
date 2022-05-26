import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-new-shop',
  templateUrl: './creat-new-shop.component.html',
  styleUrls: ['./creat-new-shop.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class CreatNewShopComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  public contactOptions = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' },
  ]
  persondisplayWith!: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.persondisplayWith = new FormControl('', Validators.required);
  }

  getErrorMessage(email:any) {
    if (email.hasError('required')) {
        return 'You must enter a value';
    }
    return email.hasError('email') ? 'Not a valid email' : '';
}
  
}
