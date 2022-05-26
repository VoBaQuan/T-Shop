import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  host: {
    class: 'overflow-hidden h-full w-full flex flex-col'
  }
})
export class OrderDetailsComponent implements OnInit {
  inforOrders =[
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
  constructor() { }

  ngOnInit(): void {
  }

}
