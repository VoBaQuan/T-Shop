import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TDSSafeAny } from 'tds-ui/shared/utility';
interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}
@Component({
  selector: 'app-discount-code',
  templateUrl: './discount-code.component.html',
  styleUrls: ['./discount-code.component.scss']
})
export class DiscountCodeComponent implements OnInit {

  selected = 0;
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: 'Chưa trả lời',
      value: 1,
      count: 20,
      disabled: false
    },
    {
      name: 'Đã trả lời',
      value: 2,
      count: 60,
      disabled: false
    },
    {
      name: 'Đã ẩn',
      value: 3,
      count: 20,
      disabled: true
    },
  ]

  public selected1 = 1;
  public listData = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]

  listOfData: Array<TDSSafeAny> = [
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Giảm 5.000 đ/đơn',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {

    console.log('selectChange', value)
  }
  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }

  openCreateDiscountCode() {
    this.router.navigate(['/pages/giamgia/taomagiamgia']);
  }
  closeCreateDiscountCode() {
    this.router.navigate(['/pages/giamgia/magiamgia']);
  }
}
