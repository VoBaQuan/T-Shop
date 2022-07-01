import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-import-order',
  templateUrl: './import-order.component.html',
  styleUrls: ['./import-order.component.scss']
})
export class ImportOrderComponent implements OnInit {
  isVisible = false;
  expandSet = new Set<number>();
  listOfData = [
    // id = 1
    {
      id: 1,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 6,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã hủy',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 7,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Chờ xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 8,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 9,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 10,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 11,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 12,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 13,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 14,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 15,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 16,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 17,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 18,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 19,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 20,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 21,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 22,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 23,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 24,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 25,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },
    {
      id: 26,
      orderCode: 'DH 023165',
      customer: 'Mua',
      phonenumber: '+84941641408',
      total: 'Công ty Sơn Hải',
      orderstatus: '35.000.000',
      status: 'Đã xử lý',
      trans: '12/3/2021  13:00',
      orderdate: '30/08/2021',
      operration: 'Chỉnh sửa',
      expand: false,
    },

  ];
  inforOrders = [
    {
      id: '1',
      ordercode: 'T1261964567',
      productname: 'Giày thể thao hiphop đen trắng',
      productcode: '0910232',
      unitprice: '1.500.000',
      quality: '1',
      total: '1.500.000'
    },
    {
      id: '2',
      ordercode: 'T1261964567',
      productname: 'Giày thể thao hiphop đen trắng',
      productcode: '0910232',
      unitprice: '1.500.000',
      quality: '1',
      total: '1.500.000'
    },
  ]
  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 'Hình thực' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  onChangePageSize(data: any) {
    console.log(data);
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
  openEditOrder(){
    this.Router.navigate(['/pages/quanlykho/donnhaphang/edit-order'])
  }
  openCreateNewImportOrder(){
    this.Router.navigate(['/pages/quanlykho/taodonnhaphangmoi'])
  }
}
