import { ModalAddWarehouseComponent } from './../modal-add-warehouse/modal-add-warehouse.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSModalService } from 'tds-ui/modal';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss'],
  host:{
    class: 'h-full w-full flex'
  }
})
export class WarehouseListComponent implements OnInit {
  selected = 0;
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: 'Khu vực kho hàng bình thường',
      value: 1,
      count: 10,
      disabled: false
    },
    {
      name: 'Khu vực kho hàng bị hư hỏng',
      value: 2,
      count: 10,
      disabled: false
    }
  ]
  listOfData: Array<TDSSafeAny> = [
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Hỏng',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
    {
      name: 'Kho CN1 Tân phú',
      code: 'KCN112',
      address: '12 CN Tây Thạnh, Tân Phú, Thành phố HCM',
      status: 'Bình thường',
      manager: 'Nguyễn Văn A',
      note: '--',
      operation: '',
    },
  ];
  constructor(private modalService: TDSModalService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {

    console.log('selectChange', value)
  }
  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }
  showModal(): void {
    const modal = this.modalService.create({
      title: 'Thêm kho hàng',
      content: ModalAddWarehouseComponent,
      viewContainerRef: this.viewContainerRef
    });
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // // Return a result when closed
    // modal.afterClose.subscribe(result => {
    //   console.log('[afterClose] The result is:', result);
    // });
  }
}
