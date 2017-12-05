import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MopsComponent } from '@app/components/mops/mops.component';
import { HeaderComponent } from '@app/components/layout/header/header.component';
import { FooterComponent } from '@app/components/layout/footer/footer.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';

import { DevExtremeComponentsModule } from '@global/dev-extreme-components.module';

import { ProductService } from '@app/services/product.service';
import { WidgetService } from '@app/services/widget.service';
import { ShipmentContactWidgetComponent } from '@app/components/shipment-contact-widget/shipment-contact-widget.component';
import { DisplayContactsComponent } from '@app/components/display-contacts/display-contacts.component';

const  appRoutes:Routes = [

  {path:'',component:HomeComponent},
  {path:'mops',component:MopsComponent},
  {path:'shipment-contact-widget',component:ShipmentContactWidgetComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MopsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShipmentContactWidgetComponent,
    DisplayContactsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DevExtremeComponentsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,WidgetService],
  exports: [
    DisplayContactsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
