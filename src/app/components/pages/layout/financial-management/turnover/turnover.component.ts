import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.scss'],
  host: {
    class: 'flex w-full h-full'
  }
})
export class TurnoverComponent implements OnInit {
  listOfData1:Array<TDSSafeAny> = [
      {
        orderImg: '/assets/img/Rectangle 2544.png',
        orderName: 'MH3201248',
        customer: 'Sun Happy',
        numberphone: '+8439962907',
        paydate: '20/01/2021',
        status:'Đang chờ người mua xác nhận nhận được hàng',
        total: '200.000',
      },
      {
        orderImg: '/assets/img/Rectangle 2544.png',
        orderName: 'MH3201248',
        customer: 'Sun Happy',
        numberphone: '+8439962907',
        paydate: '20/01/2021',
        status:'Đang chờ người mua xác nhận nhận được hàng',
        total: '200.000',
      },
      {
        orderImg: '/assets/img/Rectangle 2544.png',
        orderName: 'MH3201248',
        customer: 'Sun Happy',
        numberphone: '+8439962907',
        paydate: '20/01/2021',
        status:'Đang chờ người mua xác nhận nhận được hàng',
        total: '200.000',
      },
      {
        orderImg: '/assets/img/Rectangle 2544.png',
        orderName: 'MH3201248',
        customer: 'Sun Happy',
        numberphone: '+8439962907',
        paydate: '20/01/2021',
        status:'Đang chờ người mua xác nhận nhận được hàng',
        total: '200.000',
      },
  ];
  listOfData2:Array<TDSSafeAny> = [
    {
      orderImg: '/assets/img/Rectangle 2544.png',
      orderName: 'MH3201248',
      customer: 'Sun Happy',
      numberphone: '+8439962907',
      paydate: '20/01/2021',
      status:'Hoàn tất',
      total: '200.000',
    },
    {
      orderImg: '/assets/img/Rectangle 2544.png',
      orderName: 'MH3201248',
      customer: 'Sun Happy',
      numberphone: '+8439962907',
      paydate: '20/01/2021',
      status:'Hoàn tất',
      total: '200.000',
    },
    {
      orderImg: '/assets/img/Rectangle 2544.png',
      orderName: 'MH3201248',
      customer: 'Sun Happy',
      numberphone: '+8439962907',
      paydate: '20/01/2021',
      status:'Hoàn tất',
      total: '200.000',
    },
    {
      orderImg: '/assets/img/Rectangle 2544.png',
      orderName: 'MH3201248',
      customer: 'Sun Happy',
      numberphone: '+8439962907',
      paydate: '20/01/2021',
      status:'Hoàn tất',
      total: '200.000',
    },
];
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  reportAutoIncome(){
    this.Router.navigate(['/pages/quanlytaichinh/baocaothunhap-tudong'])
  }
}
