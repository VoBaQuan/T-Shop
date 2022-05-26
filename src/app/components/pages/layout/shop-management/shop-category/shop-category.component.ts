import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit {
  listOfData = [
    {
      categoryName: 'Áo nam',
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
  openPreviewShop(){
    this.Router.navigate(['/pages/quanlyshop/danhmuc/xemtruoc'])
  }
  openCategoryDetails(){
    this.Router.navigate(['/pages/quanlyshop/danhmuc/chitiet'])
  }
}
