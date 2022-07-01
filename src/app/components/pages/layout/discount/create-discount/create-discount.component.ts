import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
  styleUrls: ['./create-discount.component.scss']
})
export class CreateDiscountComponent implements OnInit {
  isVisible = false;
  public selected = 1;
  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  listOfData: Array<TDSSafeAny> = [
    {
      costOfCapital: '200.000đ',
      ListedPrice: '180.000đ',
      inventory: '100',
    },
    {
      costOfCapital: '200.000đ',
      ListedPrice: '180.000đ',
      inventory: '100',
    },
    {
      costOfCapital: '200.000đ',
      ListedPrice: '180.000đ',
      inventory: '100',
    },
    {
      costOfCapital: '200.000đ',
      ListedPrice: '180.000đ',
      inventory: '100',
    },
  ];
  pageSizeDisplay = 20
  listPageSizeDisplay = [
    { id: 20, name: 'Hiển thị' },
  ]

  pageSizeProductName = 20
  listPageSizeProductName = [
    { id: 20, name: 'Tên sản phẩm' },
  ]
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }

  confirmCreateDiscount(){
    this.Router.navigate(['/pages/giamgia/sanpham-giamgia'])
  }
  showModal(): void {
    this.isVisible = true;
}

handleOk(): void {
    setTimeout(() => {
        this.isVisible = false;
    }, 3000);
}

handleCancel(): void {
    this.isVisible = false;
}
}
