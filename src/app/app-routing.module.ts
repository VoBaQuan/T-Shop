import { PagesModule } from './components/pages/pages.module';
import { AccountModule } from './components/account/account.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:"account",
    loadChildren: () => import("../app/components/account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "pages",
    loadChildren: () => import("../app/components/pages/pages.module").then((m) =>m.PagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
