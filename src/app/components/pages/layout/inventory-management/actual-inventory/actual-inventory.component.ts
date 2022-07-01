import { Data } from './../../data';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}

@Component({
  selector: 'app-actual-inventory',
  templateUrl: './actual-inventory.component.html',
  styleUrls: ['./actual-inventory.component.scss']
})
export class ActualInventoryComponent implements OnInit {
  selected = 0;
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Còn hàng',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: 'Sắp hết hàng',
      value: 1,
      count: 10,
      disabled: false
    },
    {
      name: 'Hết hàng',
      value: 2,
      count: 10,
      disabled: false
    }
  ]

  listOfData = [
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    {
      duringSevenDay: '12 đôi',
      duringThirtyDay: '23 đôi',
      position: 'Kho 1',
      inventory: 'Tồn kho có sẵn',
      evaluateInventory: '5 đôi',
      minimumInventory: '30 đôi',
      operation: 'Chỉnh sửa'
    },
    
  ]

  isVisible = false;
  isVisibleAll = false;

  constructor() { }

  ngOnInit(): void { }

  onSelectChange(value: TDSSafeAny) {
    console.log('selectChange', value)
  }

  onModelChange(value: TDSSafeAny) {
    console.log('ngModelChange', value)
  }

  showModal(isShow: any): void {
    if(isShow == 'edit'){
      this.isVisible = true;
    }
    if(isShow == 'editAll'){
      this.isVisibleAll = true;
    }
  }

  handleOk(isShow: any): void {
    if(isShow == 'edit'){
      this.isVisible = false;
    }
    if(isShow == 'editAll'){
      this.isVisibleAll = false;
    }
  }

  handleCancel(isShow: any): void {
    if(isShow == 'edit'){
      this.isVisible = false;
    }
    if(isShow == 'editAll'){
      this.isVisibleAll = false;
    }
  }
}
