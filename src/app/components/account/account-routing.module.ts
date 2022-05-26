import { SigninFormComponent } from './signin/signin-form/signin-form.component';
import { SigninNumberphoneComponent } from './signin/signin-numberphone/signin-numberphone.component';
import { CreatNewPasswordComponent } from './forgot-password/creat-new-password/creat-new-password.component';
import { VerificationCodeComponent } from './forgot-password/verification-code/verification-code.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { CreatNewShopComponent } from './creat-new-shop/creat-new-shop.component';
import { ChooseStoreComponent } from './choose-store/choose-store.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'account/dang-nhap',
    pathMatch:'full'
  },
  {
    path:'',
    component: HeaderComponent,
    children: [
      {
        path: 'account/dang-nhap',
        component: LoginComponent
      },
      {
        path:'account/chon-cua-hang',
        component: ChooseStoreComponent
      },
      {
        path: 'account/tao-shop-moi',
        component: CreatNewShopComponent
      },
      {
        path: 'account/dat-lai-mat-khau',
        component: ResetPasswordComponent
      },
      {
        path: 'account/nhap-ma-xac-minh',
        component: VerificationCodeComponent
      },
      {
        path: 'account/tao-matkhau-moi',
        component: CreatNewPasswordComponent
      },
      {
        path: 'account/dangky',
        component: SigninNumberphoneComponent
      },
      {
        path: 'account/thongtindangky',
        component: SigninFormComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
