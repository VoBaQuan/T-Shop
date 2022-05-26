import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { DiscountCodeComponent } from './discount-code/discount-code.component';
import { TransDiscountComponent } from './trans-discount/trans-discount.component';
import { DiscountSettingComponent } from './discount-setting/discount-setting.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule } from 'tmt-tang-ui';
import { CreateDiscountCodeComponent } from './create-discount-code/create-discount-code.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { CreateNewDiscountComponent } from './trans-discount/create-new-discount/create-new-discount.component';



@NgModule({
  declarations: [
    ProductDiscountComponent,
    DiscountCodeComponent,
    TransDiscountComponent,
    DiscountSettingComponent,
    CreateDiscountCodeComponent,
    CreateDiscountComponent,
    CreateNewDiscountComponent,
    
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
