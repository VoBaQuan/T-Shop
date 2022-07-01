import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}

@Component({
  selector: 'app-trans-discount',
  templateUrl: './trans-discount.component.html',
  styleUrls: ['./trans-discount.component.scss']
})

export class TransDiscountComponent implements OnInit {

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

  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 'Tất cả' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]

  listOfData: Array<TDSSafeAny> = [
    {
      discountCode: 'GG033',
      used: '12/35',
      discountType: 'Miễn phí vận chuyển',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Miễn phí vận chuyển',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
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
      discountType: 'Giảm 15.000đ',
      conditionDiscount: '',
      timeApply: '12/2/2021 - 4/5/2021',
      creater: 'vobaquan01447@gmail.com',
      createDate: '12/2/2021',
      status: '',
      operation: '',
    },
  ];
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {

    console.log('selectChange', value)
  }
  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
  openCreateNewCode(){
    this.Router.navigate(['/pages/giamgia/giamgia-vanchuyen/taomamoi'])
  }
}
