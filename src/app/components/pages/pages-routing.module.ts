import { AccountSettingComponent } from './layout/config-account/account-setting/account-setting.component';
import { ShopSettingComponent } from './layout/config-account/shop-setting/shop-setting.component';
import { StaffListComponent } from './layout/staff-management/staff-list/staff-list.component';
import { OverviewReportComponent } from './layout/report/overview-report/overview-report.component';
import { ReportAutoIncomeComponent } from './layout/financial-management/report-auto-income/report-auto-income.component';
import { PaySettingComponent } from './layout/financial-management/pay-setting/pay-setting.component';
import { TurnoverComponent } from './layout/financial-management/turnover/turnover.component';
import { CreateNewImportOrderComponent } from './layout/inventory-management/create-new-import-order/create-new-import-order.component';
import { EditOrderInfoComponent } from './layout/inventory-management/edit-order-info/edit-order-info.component';
import { ActualInventoryComponent } from './layout/inventory-management/actual-inventory/actual-inventory.component';
import { ImportOrderComponent } from './layout/inventory-management/import-order/import-order.component';
import { MethodTransComponent } from './layout/ship-managenment/method-trans/method-trans.component';
import { TransSettingComponent } from './layout/ship-managenment/trans-setting/trans-setting.component';
import { MassDeliveryComponent } from './layout/ship-managenment/mass-delivery/mass-delivery.component';
import { TransListComponent } from './layout/ship-managenment/trans-list/trans-list.component';
import { CategoryDetailsComponent } from './layout/shop-management/category-details/category-details.component';
import { PreviewComponent } from './layout/shop-management/preview/preview.component';
import { EditProfileShopComponent } from './layout/shop-management/edit-profile-shop/edit-profile-shop.component';
import { ShopCategoryComponent } from './layout/shop-management/shop-category/shop-category.component';
import { ShopDesignComponent } from './layout/shop-management/shop-design/shop-design.component';
import { ShopProfileComponent } from './layout/shop-management/shop-profile/shop-profile.component';
import { MarketingComponent } from './layout/marketing/marketing.component';
import { CreateNewDiscountComponent } from './layout/discount/trans-discount/create-new-discount/create-new-discount.component';
import { CreateDiscountComponent } from './layout/discount/create-discount/create-discount.component';
import { CreateDiscountCodeComponent } from './layout/discount/create-discount-code/create-discount-code.component';
import { DiscountSettingComponent } from './layout/discount/discount-setting/discount-setting.component';
import { TransDiscountComponent } from './layout/discount/trans-discount/trans-discount.component';
import { ProductDiscountComponent } from './layout/discount/product-discount/product-discount.component';
import { DiscountCodeComponent } from './layout/discount/discount-code/discount-code.component';
import { PurchasingHistoryComponent } from './layout/purchasing-history/purchasing-history.component';
import { CustomerListComponent } from './layout/customer-list/customer-list.component';
import { EvaluateTransportComponent } from './layout/evaluate/evaluate-transport/evaluate-transport.component';
import { EvaluateShopComponent } from './layout/evaluate/evaluate-shop/evaluate-shop.component';
import { EvaluateProductComponent } from './layout/evaluate/evaluate-product/evaluate-product.component';
import { AddNewProductComponent } from './layout/product/add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './layout/product/product-details/product-details.component';
import { AddProductComponent } from './layout/product/add-product/add-product.component';
import { ProductListComponent } from './layout/product/product-list/product-list.component';
import { ReturnRequestComponent } from './layout/order/return-request/return-request.component';
import { OrderDetailsComponent } from './layout/order/order-details/order-details.component';
import { ReturnOrdersComponent } from './layout/order/return-orders/return-orders.component';
import { OrderListComponent } from './layout/order/order-list/order-list.component';
import { MessageSettingComponent } from './layout/message/message-setting/message-setting.component';
import { MessageListComponent } from './layout/message/message-list/message-list.component';
import { OverviewComponent } from './layout/overview/overview.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseListComponent } from './layout/inventory-management/warehouse-list/warehouse-list.component';

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'trangchu',
        component: OverviewComponent,
      },
      {
        path: 'trochuyen/DS-tinnhan',
        component: MessageListComponent
      },
      {
        path: 'trochuyen/thietlapchat',
        component: MessageSettingComponent
      },
      {
        path: 'donhang/danhsach-donhang',
        component: OrderListComponent
      },
      {
        path: 'donhang/trahang',
        component: ReturnOrdersComponent
      },
      {
        path: 'donhang/chitiet-donhang',
        component: OrderDetailsComponent
      },
      {
        path: 'trahang/yeucautrahang',
        component: ReturnRequestComponent
      },
      {
        path: 'sanpham/danhsach-sanpham',
        component: ProductListComponent
      },
      {
        path: 'sanpham/chitietsp',
        component: ProductDetailsComponent
      },
      {
        path: 'sanpham/themsanpham',
        component: AddProductComponent
      },
      {
        path: 'sanpham/themsanpham/taosanphammoi',
        component: AddNewProductComponent
      },
      {
        path: 'danhgia/danhgiashop',
        component: EvaluateShopComponent
      },
      {
        path: 'danhgia/danhgiasanpham',
        component: EvaluateProductComponent
      },
      {
        path: 'danhgia/danhgiavanchuyen',
        component: EvaluateTransportComponent
      },
      {
        path: 'danhsachkhachhang',
        component: CustomerListComponent
      },
      {
        path: 'chitiet-lichsumuahang',
        component: PurchasingHistoryComponent
      },
      {
        path: 'giamgia/magiamgia',
        component: DiscountCodeComponent
      },
      {
        path: 'giamgia/sanpham-giamgia',
        component: ProductDiscountComponent
      },
      {
        path: 'giamgia/giamgia-vanchuyen',
        component: TransDiscountComponent
      },
      {
        path: 'giamgia/caidat-giamgia',
        component: DiscountSettingComponent
      },
      {
        path: 'giamgia/taomagiamgia',
        component: CreateDiscountCodeComponent
      },
      {
        path: 'giamgia/taogiamgia',
        component: CreateDiscountComponent
      },
      {
        path: 'giamgia/giamgia-vanchuyen/taomamoi',
        component: CreateNewDiscountComponent
      },
      {
        path: 'quangcaosanpham',
        component: MarketingComponent
      },
      {
        path: 'quanlyshop/hoso',
        component: ShopProfileComponent
      },
      {
        path: 'quanlyshop/trangtri',
        component: ShopDesignComponent
      },
      {
        path: 'quanlyshop/danhmuc',
        component: ShopCategoryComponent
      },
      {
        path: 'quanlyshop/hoso/chinhsua',
        component: EditProfileShopComponent
      },
      {
        path: 'quanlyshop/danhmuc/xemtruoc',
        component: PreviewComponent
      },
      {
        path: 'quanlyshop/danhmuc/chitiet',
        component: CategoryDetailsComponent
      },
      {
        path: 'quanlyvanchuyen/danhsachvanchuyen',
        component: TransListComponent
      },
      {
        path: 'quanlyvanchuyen/giaohangloat',
        component: MassDeliveryComponent
      },
      {
        path: 'quanlyvanchuyen/caidat-vanchuyen',
        component: TransSettingComponent
      },
      {
        path: 'quanlyvanchuyen/chitiet-vanchuyen',
        component: MethodTransComponent
      },
      {
        path: 'quanlykho/danhsachkhohang',
        component: WarehouseListComponent
      },
      {
        path: 'quanlykho/tonkho',
        component: ActualInventoryComponent
      },
      {
        path: 'quanlykho/donnhaphang',
        component: ImportOrderComponent
      },
      {
        path: 'quanlykho/donnhaphang/edit-order',
        component: EditOrderInfoComponent
      },
      {
        path: 'quanlykho/taodonnhaphangmoi',
        component: CreateNewImportOrderComponent
      },
      {
        path: 'quanlytaichinh/doanhthu',
        component: TurnoverComponent
      },
      {
        path: 'quanlytaichinh/thietlap-thanhtoan',
        component: PaySettingComponent
      },
      {
        path: 'quanlytaichinh/baocaothunhap-tudong',
        component: ReportAutoIncomeComponent
      },
      {
        path: 'baocao/tongquang',
        component: OverviewReportComponent
      },
      {
        path: 'quanlynv/DSnhanhvien',
        component: StaffListComponent
      },
      {
        path: 'cauhinh-TK/thietlapshop',
        component: ShopSettingComponent
      },
      {
        path: 'cauhinh-TK/taikhoan',
        component: AccountSettingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
