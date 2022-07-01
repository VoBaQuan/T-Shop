import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  variant:boolean = true;
  nonVariant:boolean = false;

  public listOfData =[{}]

  public listOfData1 =[
    {
      id: 1,
      element1: 'Giá trị 1',
      element2: 'Giá trị 1 - 2',
      warrantyPeriod: '6 tháng',
    },
    {
      id: 2,
      element1: 'Giá trị 1',
      element2: 'Giá trị 2 - 2',
      warrantyPeriod: '12 tháng',
    },
    {
      id: 3,
      element1: 'Giá trị 1',
      element2: 'Giá trị 2 - 2',
      warrantyPeriod: '6 tháng',
    },
    {
      id: 4,
      element1: 'Giá trị 1',
      element2: 'Giá trị 2 - 2',
      warrantyPeriod: '12 tháng',
    },
  ]
  public listSelected = [5, 6];

  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]

  radioValue = 'A';
  pageSize = 20;

  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onChangePageSize(data: any) {
    console.log(data);
  }

  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }

  showVariant(show:string){
    if(show=='variant'){
      this.variant = true
      this.nonVariant = false
    }
    else if(show=='nonVariant'){
      this.variant = false
      this.nonVariant = true
    }
    // else{
    //   this.variant = true
    //   this.nonVariant = false
    // }
  }
}
