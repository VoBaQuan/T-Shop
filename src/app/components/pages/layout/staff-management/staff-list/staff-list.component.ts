import { ModalDeleteStaffComponent } from './../modal-delete-staff/modal-delete-staff.component';
import { ModalEditStaffComponent } from './../modal-edit-staff/modal-edit-staff.component';
import { ModalAddStaffComponent } from './../modal-add-staff/modal-add-staff.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSModalService } from 'tds-ui/modal';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
  host: {
    class: "flex w-full h-full"
  }
})
export class StaffListComponent implements OnInit {

  pageSizeStatus = 1;
  listPageSizeStatus = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Đang hoạt động' },
    { id: 3, name: 'Không hoạt động' },
  ]

  pageSizePermision = 1;
  listPageSizePermision = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'NBH- toàn quyên truy cập' },
    { id: 3, name: 'NBH- Cập nhật nhà kho' },
    { id: 4, name: 'NBH- Truy cập đầy đủ API' },
    { id: 5, name: 'NBH- NBH- toàn quyên truy cập' },
  ]

  listOfData: Array<TDSSafeAny> = [
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
    {
      accountName: 'Suhappy',
      staffCode: 'NV123456',
      phone: '0775546393',
      email: 'Sunhappy@gmail.com',
      permision: 'NBH- toàn quyên truy cập',
    },
  ];

  constructor(private Router: Router, private modalService: TDSModalService, private modal: TDSModalService) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }
  onChangePageSize(data: any) {
    console.log(data);
  }
  showModal(isShow: any): void {
    if (isShow == 'add') {
      const modal = this.modalService.create({
        title: 'Thêm nhân viên',
        content: ModalAddStaffComponent
      })
    }
    if (isShow == 'edit') {
      const modal = this.modalService.create({
        title: 'Chỉnh sửa nhân viên',
        content: ModalEditStaffComponent
      })
    }
    // if (isShow == 'delete') {
    //   const modal = this.modalService.create({
    //     title: 'Xóa nhân viên',
    //     content: ModalDeleteStaffComponent
    //   })
    // }
  }
  error(): void {
    this.modal.error({
      title: 'Xóa nhân viên',
      content: 'Bạn chắc chắn muốn xóa',
      onOk: () => console.log(' OK'),
      onCancel: () => { console.log('cancel') },
      okText: "Đóng",
      cancelText: "Xác nhận"
    });
  }
}
