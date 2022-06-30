import { ConfigAccountModule } from './layout/config-account/config-account.module';
import { StaffManagementModule } from './layout/staff-management/staff-management.module';
import { ReportModule } from './layout/report/report.module';
import { TDSEchartsModule } from 'tds-report';
import { FinancialManagementModule } from './layout/financial-management/financial-management.module';
import { InventoryManagementModule } from './layout/inventory-management/inventory-management.module';
import { ShipManagenmentModule } from './layout/ship-managenment/ship-managenment.module';
import { ShopManagementModule } from './layout/shop-management/shop-management.module';
import { DiscountModule } from './layout/discount/discount.module';
import { EvaluateModule } from './layout/evaluate/evaluate.module';
import { ProductModule } from './layout/product/product.module';
import { OrderModule } from './layout/order/order.module';
import { MessageModule } from './layout/message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './layout/overview/overview.component';
import { CustomerListComponent } from './layout/customer-list/customer-list.component';
import { PurchasingHistoryComponent } from './layout/purchasing-history/purchasing-history.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSDatePickerModule, TDSRateModule } from 'tmt-tang-ui';
import { MarketingComponent } from './layout/marketing/marketing.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormatContentPipe } from './layout/pipes/format-content.pipe';

@NgModule({
  declarations: [
  
    LayoutComponent,
       OverviewComponent,
       CustomerListComponent,
       PurchasingHistoryComponent,
       MarketingComponent,
      //  FormatContentPipe,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    MessageModule,
    OrderModule,
    ProductModule,
    EvaluateModule,
    DiscountModule,
    ShopManagementModule,
    ShipManagenmentModule,
    InventoryManagementModule,
    FinancialManagementModule,
    ReportModule,
    StaffManagementModule,
    ConfigAccountModule,
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
    TDSDatePickerModule,
    TDSRateModule,
    TDSEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ]
})
export class PagesModule { }
