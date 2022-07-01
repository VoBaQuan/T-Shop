import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-purchasing-history',
  templateUrl: './purchasing-history.component.html',
  styleUrls: ['./purchasing-history.component.scss']
})
export class PurchasingHistoryComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }
}
