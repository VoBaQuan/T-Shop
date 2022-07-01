import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-method-trans',
  templateUrl: './method-trans.component.html',
  styleUrls: ['./method-trans.component.scss']
})
export class MethodTransComponent implements OnInit {
  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 'Trạng thái' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]
  listOfData:Array<TDSSafeAny> = [
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
      {
        orderCode: 'INV01238551',
        buyDate: '12/03/2021',
        status: 'Đã giao',
        trans: 'Giao hàng tiết kiệm',
        address: 'HCM City',
        total: '3.000.000',
      },
  ];
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
  closeTransportaion(){
    this.Router.navigate(['/pages/quanlyvanchuyen/caidat-vanchuyen'])
  }
}
