import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MopsComponent } from './components/mops/mops.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';
import { DxTextBoxModule, 
  DxListModule,DxBoxModule,
  DxTemplateModule,
  DxPopupModule,DxTooltipModule,
  DxFormModule,DxDataGridModule,DxPopoverModule,
  DxButtonModule,DxFormComponent} from 'devextreme-angular';

import { ProductService } from './services/product.service';
import { WidgetService } from './services/widget.service';
import { ContactComponent } from './components/contact/contact.component';
import { shipmentComponent } from './components/shipment/shipment.component';

const  appRoutes:Routes = [

  {path:'',component:HomeComponent},
  {path:'mops',component:MopsComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MopsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    shipmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DxTextBoxModule,
    DxListModule,
    DxTemplateModule,
    DxFormModule,
    DxButtonModule,
    DxBoxModule,
    DxPopupModule,
    FormsModule,
    DxDataGridModule,
    DxTooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,WidgetService],
  exports: [
    shipmentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
