import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule, TDSRateModule, TDSEmptyModule } from 'tmt-tang-ui';
import { TurnoverComponent } from './turnover/turnover.component';
import { PaySettingComponent } from './pay-setting/pay-setting.component';
import { ReportAutoIncomeComponent } from './report-auto-income/report-auto-income.component';



@NgModule({
  declarations: [
    TurnoverComponent,
    PaySettingComponent,
    ReportAutoIncomeComponent
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
export class FinancialManagementModule { }
