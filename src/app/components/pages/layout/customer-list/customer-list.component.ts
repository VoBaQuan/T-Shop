import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  host:{
    class: 'h-full w-full flex'
  }
})
export class CustomerListComponent implements OnInit {
  customers: any;
  expandSet = new Set<number>();

  listOfData = [
    {
      id: 1,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 2,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 3,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 4,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 5,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 6,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 7,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 8,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 9,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 10,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 11,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 12,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 13,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 14,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 15,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 16,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 17,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 18,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 19,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 20,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },
    {
      id: 21,
      numberPhone: '0941641408',
      customerName: 'Võ Bá Quận',
      expand: false,
      birthday: '20/10/2000',
      email: 'vobaquan0147@gmail.com',
      address: 'Hòa thạnh, Tân Phú, HCM',
      totalSpending: '1.000.000',
      operationReport: 'Báo cáo',
      operationMessage: 'Nhắn tin',
    },

  ];

  listOfHistory = [
    {
      orderCode: 'INV049842132',
      dateBuy: '12/03/2021',
      status: 'Đã giao',
      trans: 'Giao hàng tiết kiệm',
      address: 'Hồ Chí Minh',
      total: '3.000.000',
    },
    {
      orderCode: 'INV049842132',
      dateBuy: '12/03/2021',
      status: 'Đã giao',
      trans: 'Giao hàng tiết kiệm',
      address: 'Hồ Chí Minh',
      total: '3.000.000',
    },
    {
      orderCode: 'INV049842132',
      dateBuy: '12/03/2021',
      status: 'Đã hủy',
      trans: 'Giao hàng tiết kiệm',
      address: 'Hồ Chí Minh',
      total: '3.000.000',
    },
    {
      orderCode: 'INV049842132',
      dateBuy: '12/03/2021',
      status: 'Đã giao',
      trans: 'Giao hàng tiết kiệm',
      address: 'Hồ Chí Minh',
      total: '3.000.000',
    },
  ]

  listOfNote = [
    {
      adder: 'Võ Bá Quận',
      addDate: '12/03/2021',
      numberPhone: '0941641408',
      note: 'Quận đẹp trai dễ thương !!'
    },
    {
      adder: 'Võ Bá Quận',
      addDate: '12/03/2021',
      numberPhone: '0941641408',
      note: 'Quận đẹp trai dễ thương !!'
    },
    {
      adder: 'Võ Bá Quận',
      addDate: '12/03/2021',
      numberPhone: '0941641408',
      note: 'Quận đẹp trai dễ thương !!'
    },
    {
      adder: 'Võ Bá Quận',
      addDate: '12/03/2021',
      numberPhone: '0941641408',
      note: 'Quận đẹp trai dễ thương !!'
    },
    
  ]
  constructor(private customer: CustomerService) { }

  ngOnInit(): void {
    this.customer.getCustomerList().subscribe(res => {  
      // console.log(res)
      this.customers = res
    })
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
