import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-product-discount',
  templateUrl: './product-discount.component.html',
  styleUrls: ['./product-discount.component.scss']
})
export class ProductDiscountComponent implements OnInit {
  isVisibleEdit = false;
  isVisibleCreateDiscount = false;
  pageSizeDate = 20;
  listPageSizeDate = [
    { id: 20, name: 'Ngày bắt đầu' },
  ]
  pageSizeProduct = 20;
  listPageSizeProduct = [
    { id: 20, name: 'Tên sản phẩm' },
  ]
  listOfData: Array<TDSSafeAny> = [
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Chưa hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Hết hiệu lực',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Tạm ngưng',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
    {
      product: '',
      totalDiscount: '100',
      qualitySell: '80',
      priceAfterDiscount: '200.000đ',
      priceBeforeDiscount: '180.000đ',
      time: '',
      status: 'Đang hoạt động',
      activate: '',
      operation: '',
    },
  ]
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
  showModal(isShow: any): void {
    if (isShow == 'edit') {
      this.isVisibleEdit = true
    }
    if (isShow == 'create') {
      this.isVisibleCreateDiscount = true
    }
  }

  handleOk(isShow: any): void {
    setTimeout(() => {
      if (isShow == 'edit') {
        this.isVisibleEdit = false
      }
      if (isShow == 'create') {
        this.isVisibleCreateDiscount = false
      }
    }, 1000);
  }

  handleCancel(isShow: any): void {
    if (isShow == 'edit') {
      this.isVisibleEdit = false
    }
    if (isShow === 'create') {
      this.isVisibleCreateDiscount = false
    }
  }
  openCreateDiscount() {
    this.Router.navigate(['/pages/giamgia/taogiamgia']);
  }
  log(str: any) {
    console.log(str)
  }
}
