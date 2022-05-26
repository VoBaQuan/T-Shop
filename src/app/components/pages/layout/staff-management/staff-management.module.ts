import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffListComponent } from './staff-list/staff-list.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule, TDSRateModule, TDSEmptyModule } from 'tmt-tang-ui';
import { ModalAddStaffComponent } from './modal-add-staff/modal-add-staff.component';
import { ModalEditStaffComponent } from './modal-edit-staff/modal-edit-staff.component';
import { ModalDeleteStaffComponent } from './modal-delete-staff/modal-delete-staff.component';



@NgModule({
  declarations: [
    StaffListComponent,
    ModalAddStaffComponent,
    ModalEditStaffComponent,
    ModalDeleteStaffComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSPageHeaderModule,
    TDSHeaderModule,
    TDSButtonModule,
    TDSButtonMenuModule,
    TDSButtonSpitModule,
    TDSBreadCrumbModule,
    TDSCheckBoxModule,
    TDSTabsModule,
    TDSDropDownModule,
    TDSTagModule,
    TDSAvatarModule,
    TDSModalModule,
    TDSSwitchModule,
    TDSTimePickerModule,
    TDSCollapseModule,
    TDSTableModule,
    TDSFilterStatusModule,
    TDSTagModule,
    TDSBadgeModule,
    TDSTimelineModule,
    TDSSelectModule,
    TDSUploadModule,
    TDSRadioModule,
    TDSDatePickerModule,
    TDSStepsModule,
    TDSRateModule,
    TDSEmptyModule
  ]
})
export class StaffManagementModule { }
