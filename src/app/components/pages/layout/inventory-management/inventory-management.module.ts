import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule, TDSRateModule, TDSEmptyModule } from 'tmt-tang-ui';
import { FormsModule } from '@angular/forms';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { ImportOrderComponent } from './import-order/import-order.component';
import { ActualInventoryComponent } from './actual-inventory/actual-inventory.component';
import { ModalAddWarehouseComponent } from './modal-add-warehouse/modal-add-warehouse.component';
import { EditOrderInfoComponent } from './edit-order-info/edit-order-info.component';
import { CreateNewImportOrderComponent } from './create-new-import-order/create-new-import-order.component';



@NgModule({
  declarations: [
  
    WarehouseListComponent,
       ImportOrderComponent,
       ActualInventoryComponent,
       ModalAddWarehouseComponent,
       EditOrderInfoComponent,
       CreateNewImportOrderComponent
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
export class InventoryManagementModule { }
