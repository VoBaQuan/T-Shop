import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateShopComponent } from './evaluate-shop/evaluate-shop.component';
import { EvaluateProductComponent } from './evaluate-product/evaluate-product.component';
import { EvaluateTransportComponent } from './evaluate-transport/evaluate-transport.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSRateModule, TDSSkeletonModule, TDSTypographyModule } from 'tmt-tang-ui';
import { FormsModule } from '@angular/forms';
import { FormatContentPipe } from '../pipes/format-content.pipe';



@NgModule({
  declarations: [
    EvaluateShopComponent,
    EvaluateProductComponent,
    EvaluateTransportComponent,
    FormatContentPipe
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
    TDSRateModule,
    TDSSkeletonModule,
    TDSTypographyModule
  ]
})
export class EvaluateModule { }
