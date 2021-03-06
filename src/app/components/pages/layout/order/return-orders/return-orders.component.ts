import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-return-orders',
  templateUrl: './return-orders.component.html',
  styleUrls: ['./return-orders.component.scss']
})
export class ReturnOrdersComponent implements OnInit {
  expandSet = new Set<number>();
  listOfData =[
    {
      id: 1,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Đã hoàn tiền',
      followtrans: '',
      operration: '',
      expand: false,
    },
    {
      id: 2,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Đã hoàn tiền',
      followtrans: '',
      operration: '',
      expand: false,
    },
    {
      id: 3,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã hủy',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Từ chối',
      followtrans: '',
      operration: '',
      expand: false,
    },
    {
      id: 4,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Đang xử lý',
      followtrans: 'Kiện hàng đã giao cho bưu cục',
      operration: '',
      expand: false,
    },
    {
      id: 5,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 5,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 6,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 7,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 8,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 9,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 10,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 11,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 12,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },
    {
      id: 13,
      orderCode: 'INV01238551',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '120.000',
      originalorder: 'Đã giao hàng',
      requestdate: '30/08/2021',
      processingtime: '07/09/2021',
      returnstatus: 'Chưa xử lý',
      followtrans: '',
      operration: 'Phản hồi',
      expand: false,
    },

  ]
  inforOrders = [
    {
      id: '1',
      ordercode: 'INV01238551',
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
  constructor() { }

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
}
