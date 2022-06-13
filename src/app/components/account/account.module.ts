import { SigninModule } from './signin/signin.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { TDSButtonModule, TDSButtonMenuModule, TDSFormFieldModule, TDSInputModule, TDSCheckBoxModule, TDSSelectModule, TDSHeaderModule, TDSAvatarModule } from 'tmt-tang-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountRoutingModule } from './account-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ChooseStoreComponent } from './choose-store/choose-store.component';
import { CreatNewShopComponent } from './creat-new-shop/creat-new-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyInterceptor } from './interceptor/interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ChooseStoreComponent,
    CreatNewShopComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    SigninModule,
    ForgotPasswordModule,
    TDSButtonModule,
    TDSButtonMenuModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSCheckBoxModule,
    TDSSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TDSHeaderModule,
    ForgotPasswordModule,
    SigninModule,
    TDSAvatarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ]
})
export class AccountModule { }
