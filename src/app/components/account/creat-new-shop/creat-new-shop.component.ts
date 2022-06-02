import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-new-shop',
  templateUrl: './creat-new-shop.component.html',
  styleUrls: ['./creat-new-shop.component.scss'],
  host: {
    class: "flex w-full item-center justify-center"
  }
})
export class CreatNewShopComponent implements OnInit {

  public contactOptions = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' },
  ]

  createNewShopForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createNewShopForm = this.fb.group({
      shopname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numberphone: ['', Validators.compose([Validators.required,Validators.pattern(/^[0-9]{10}$/i)])]
    })
  }
  onSubmit() {
    console.log(this.createNewShopForm)
  }
}
