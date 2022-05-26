import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ShopDesignComponent } from './shop-design/shop-design.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule, TDSRateModule } from 'tmt-tang-ui';
import { EditProfileShopComponent } from './edit-profile-shop/edit-profile-shop.component';
import { PreviewComponent } from './preview/preview.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';



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
