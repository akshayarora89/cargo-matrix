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
  DxPopupModule,
  DxFormModule,
  DxButtonModule,DxFormComponent} from 'devextreme-angular';
import { ProductService } from './services/product.service';
import { WidgetService } from './services/widget.service';
import { MopProcessesComponent } from './components/mop-processes/mop-processes.component';
import { SubProcessMopsComponent } from './components/sub-process-mops/sub-process-mops.component';
import { MopSubsystemComponent } from './components/mop-subsystem/mop-subsystem.component';
import { ShippingWidgetDisplayComponentComponent } from './components/shipping-widget-display-component/shipping-widget-display-component.component';
import { WidgetComponentComponent } from './components/widget-component/widget-component.component';

const  appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'mops',component:MopsComponent},
  {path:'mop_processes',component:MopProcessesComponent},
  {path:'mop_SubProcesses',component:SubProcessMopsComponent},
  {path:'mop_SubSystem',component:MopSubsystemComponent},
  {path:'shippingContactDisplayWidget',component:ShippingWidgetDisplayComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MopsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MopProcessesComponent,
    SubProcessMopsComponent,
    MopSubsystemComponent,
    ShippingWidgetDisplayComponentComponent,
    WidgetComponentComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,WidgetService],
  exports: [
    WidgetComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
