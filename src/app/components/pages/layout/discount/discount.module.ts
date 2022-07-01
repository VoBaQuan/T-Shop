import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { DiscountCodeComponent } from './discount-code/discount-code.component';
import { TransDiscountComponent } from './trans-discount/trans-discount.component';
import { DiscountSettingComponent } from './discount-setting/discount-setting.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { CreateNewDiscountComponent } from './trans-discount/create-new-discount/create-new-discount.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSButtonSpitModule } from 'tds-ui/buttton-split';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSRadioModule } from 'tds-ui/radio';
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
import { CreateDiscountCodeComponent } from './create-discount-code/create-discount-code.component';



@NgModule({
  declarations: [
    ProductDiscountComponent,
    DiscountCodeComponent,
    TransDiscountComponent,
    DiscountSettingComponent,
    CreateDiscountComponent,
    CreateNewDiscountComponent,
    CreateDiscountCodeComponent
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
    TDSStepsModule
  ]
})
export class DiscountModule { }
