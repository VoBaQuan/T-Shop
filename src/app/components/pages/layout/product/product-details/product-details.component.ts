import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  listOfImages = [
    {
      id: 1,
      path:"/assets/img/Rectangle 1671.png",
    },
    {
      id: 2,
      path:"/assets/img/Rectangle 1671.png",
    },
    {
      id: 3,
      path:"/assets/img/Rectangle 1671.png",
    },
    {
      id: 4,
      path:"/assets/img/Rectangle 1671.png",
    },
    {
      id: 5,
      path:"/assets/img/Rectangle 1671.png",
    },
  ]
  listOfVariant = [
    {
      id: 1,
      size: 'M',
      colors: 'Trắng',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 2,
      size: 'M',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 3,
      size: 'L',
      colors: 'Trắng',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 4,
      size: 'L',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 5,
      size: 'L',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 6,
      size: 'L',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 7,
      size: 'L',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
    {
      id: 8,
      size: 'L',
      colors: 'Đen',
      warrantyperiod: '12 tháng',
      quality: '50',
      SKU: 'JD1234t12',
      displace:'',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
