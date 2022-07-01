import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateProductComponent } from './evaluate-product/evaluate-product.component';
import { EvaluateTransportComponent } from './evaluate-transport/evaluate-transport.component';
import { FormsModule } from '@angular/forms';
import { FormatContentPipe } from '../pipes/format-content.pipe';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSButtonSpitModule } from 'tds-ui/buttton-split';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSRateModule } from 'tds-ui/rate';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSSkeletonModule } from 'tds-ui/skeleton';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSTypographyModule } from 'tds-ui/typography';
import { TDSUploadModule } from 'tds-ui/upload';
import { EvaluateShopComponent } from './evaluate-shop/evaluate-shop.component';



@NgModule({
  declarations: [
    EvaluateProductComponent,
    EvaluateTransportComponent,
    FormatContentPipe,
    EvaluateShopComponent
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
