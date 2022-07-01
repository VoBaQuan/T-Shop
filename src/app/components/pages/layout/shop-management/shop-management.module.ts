import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ShopDesignComponent } from './shop-design/shop-design.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { EditProfileShopComponent } from './edit-profile-shop/edit-profile-shop.component';
import { PreviewComponent } from './preview/preview.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
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
    ShopProfileComponent,
    ShopDesignComponent,
    ShopCategoryComponent,
    EditProfileShopComponent,
    PreviewComponent,
    CategoryDetailsComponent
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
    TDSRateModule
  ]
})
export class ShopManagementModule { }
