import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  resetPassForm!: FormGroup

  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: '+84' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPassForm = this.fb.group({
      numberPhone: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/i)
      ])]
    })
  }

  onChangePageSize(data: any) {
    console.log(data);
  }
  onSubmit(){
    console.log(this.resetPassForm)
  }
}
