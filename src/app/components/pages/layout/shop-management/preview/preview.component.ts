import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  listOfData = [
    {
      categoryName: 'Quần áo',
      creater: 'vobaquan0147@gmail.com',
      createDate: '20/01/2021',
      products: '5',
      display: '',
      operation: '',
    },
    {
      categoryName: 'Giày dép',
      creater: 'vobaquan0147@gmail.com',
      createDate: '20/01/2021',
      products: '5',
      display: '',
      operation: '',
    },
    {
      categoryName: 'Áo nữ',
      creater: 'vobaquan0147@gmail.com',
      createDate: '20/01/2021',
      products: '5',
      display: '',
      operation: '',
    },
    {
      categoryName: 'Quần Nam',
      creater: 'vobaquan0147@gmail.com',
      createDate: '20/01/2021',
      products: '5',
      display: '',
      operation: '',
    },
  ]
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.Router.navigate(['/pages/quanlyshop/danhmuc'])
  }
  cancel(){
    this.Router.navigate(['/pages/quanlyshop/danhmuc'])
  }
}
