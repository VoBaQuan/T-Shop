import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-pay-setting',
  templateUrl: './pay-setting.component.html',
  styleUrls: ['./pay-setting.component.scss']
})
export class PaySettingComponent implements OnInit {
  isVisibleAddBank = false;
  isVisibleUpdatePin = false;
  constructor() { }
  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  ngOnInit(): void {
  }
  showModal(isShow: any): void {
    if(isShow == 'addbank'){
      this.isVisibleAddBank = true;
    } 
    if(isShow == 'updatepin'){
      this.isVisibleUpdatePin = true;
    }
  }

  handleOk(isShow: any): void {
    if(isShow == 'addbank'){
      this.isVisibleAddBank = false;
    } 
    if(isShow == 'updatepin'){
      this.isVisibleUpdatePin = false;
    }
  }

  handleCancel(isShow: any): void {
    if(isShow == 'addbank'){
      this.isVisibleAddBank = false;
    } 
    if(isShow == 'updatepin'){
      this.isVisibleUpdatePin = false;
    }
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }
}
