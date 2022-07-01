import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { ImportOrderComponent } from './import-order/import-order.component';
import { ActualInventoryComponent } from './actual-inventory/actual-inventory.component';
import { ModalAddWarehouseComponent } from './modal-add-warehouse/modal-add-warehouse.component';
import { EditOrderInfoComponent } from './edit-order-info/edit-order-info.component';
import { CreateNewImportOrderComponent } from './create-new-import-order/create-new-import-order.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSButtonSpitModule } from 'tds-ui/buttton-split';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSEmptyModule } from 'tds-ui/empty';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSRateModule } from 'tds-ui/rate';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSStepsModule } from 'tds-ui/step';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSUploadModule } from 'tds-ui/upload';



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
