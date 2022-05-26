import { AccountModule } from './components/account/account.module';
import { PagesModule } from './components/pages/pages.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TDSButtonMenuModule, TDSButtonModule, TDS_I18N, vi_VN } from 'tmt-tang-ui'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { DragDropModule } from '@angular/cdk/drag-drop'; 
// Đa ngôn ngữ
import localeVi from '@angular/common/locales/vi'; 
import { registerLocaleData } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TDSEchartsModule } from 'tds-report';
// Thiết lập tiếng Việt
registerLocaleData(localeVi); 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    ScrollingModule,
    TDSButtonModule,
    TDSButtonMenuModule,
    PagesModule,
    AccountModule,
    
  ],
  providers: [{ provide: TDS_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
