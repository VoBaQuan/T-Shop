import { ReactiveFormsModule } from '@angular/forms';
// import { TDSHeaderModule, TDSFormFieldModule, TDSInputModule, TDSDropDownModule, TDSButtonModule, TDSButtonMenuModule } from 'tmt-tang-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CreatNewPasswordComponent } from './creat-new-password/creat-new-password.component';
import { TDSFormFieldModule, TDSInputModule, TDSPageHeaderModule, TDSHeaderModule, TDSButtonModule, TDSButtonMenuModule, TDSButtonSplit, TDSButtonSpitModule, TDSBreadCrumbModule, TDSCheckBoxModule, TDSTabsModule, TDSDropDownModule, TDSTagModule, TDSAvatarModule, TDSModalModule, TDSSwitchModule, TDSTimePickerModule, TDSCollapseModule, TDSTableModule, TDSFilterStatusModule, TDSBadgeModule, TDSTimelineModule, TDSSelectModule, TDSUploadModule, TDSRadioModule, TDSDatePickerModule, TDSStepsModule, TDSRateModule, TDSEmptyModule } from 'tmt-tang-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    VerificationCodeComponent,
    CreatNewPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
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
    TDSEmptyModule,
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
