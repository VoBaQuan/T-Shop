import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { ReturnOrdersComponent } from './return-orders/return-orders.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule } from 'tmt-tang-ui';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReturnRequestComponent } from './return-request/return-request.component';
import { SuggestionsOtherModalComponent } from './suggestions-other-modal/suggestions-other-modal.component';
import { ComplainModalComponent } from './complain-modal/complain-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderListComponent,
    ReturnOrdersComponent,
    OrderDetailsComponent,
    ReturnRequestComponent,
    SuggestionsOtherModalComponent,
    ComplainModalComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
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
    TDSSelectModule
    
  ]
})
export class OrderModule { }
