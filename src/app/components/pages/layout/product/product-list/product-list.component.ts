import { Component, OnInit } from '@angular/core';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 'Thao tác' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]
  listOfData = [
    {
      id: 1,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 2,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 3,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 4,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 5,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 6,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 7,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 8,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 9,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 10,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 11,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 12,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 13,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 14,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 15,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 16,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 17,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 18,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 19,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 20,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 21,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    }, {
      id: 22,
      productcode: 'T121923894758',
      productname: 'Giày thể thao',
      evaluate: '4,6',
      unit: 'Đôi',
      price: '5.000.000',
      warehouse: '50',
      sold: '20',
      createdate: '20/06/2021',
    },
  ];
  listOfVariant = [
    {
      id: 1,
      size: 'M',
      colors: 'Trắng',
      price: '5.000.000',
      quality: '50',
      SKU: 'JD1234t12',
      displace: '',
    },
    {
      id: 2,
      size: 'M',
      colors: 'Đen',
      price: '5.000.000',
      quality: '50',
      SKU: 'JD1234t12',
      displace: '',
    },
    {
      id: 3,
      size: 'L',
      colors: 'Trắng',
      price: '5.000.000',
      quality: '50',
      SKU: 'JD1234t12',
      displace: '',
    },
    {
      id: 4,
      size: 'L',
      colors: 'Đen',
      price: '5.000.000',
      quality: '50',
      SKU: 'JD1234t12',
      displace: '',
    }
  ]

  expandSet = new Set<number>();

  constructor(private modal: TDSModalService) { }

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
  onChangePageSize(data:any) {
    console.log(data);
  }
}
