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
import { MarketingComponent } from './layout/marketing/marketing.component';
import { HttpClientModule } from '@angular/common/http';
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
import { TDSRateModule } from 'tds-ui/rate';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { TDSTimelineModule } from 'tds-ui/timeline';

@NgModule({
  declarations: [
    LayoutComponent,
    OverviewComponent,
    CustomerListComponent,
    PurchasingHistoryComponent,
    MarketingComponent,
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
