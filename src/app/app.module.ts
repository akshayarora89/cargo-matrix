import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MopsComponent } from './components/mops/mops.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule,DxBoxModule,DxTemplateModule,DxSelectBoxModule,DxFormModule,DxButtonModule} from 'devextreme-angular';
import { ProductService } from './services/product.service';
import { MopOneComponent } from './components/mop-one/mop-one.component';
import { SubProcessMopsComponent } from './components/sub-process-mops/sub-process-mops.component';

const  appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'mops',component:MopOneComponent},
  {path:'mop_processes',component:MopsComponent},
   {path:'mop_SubProcesses',component:SubProcessMopsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MopsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MopOneComponent,
    SubProcessMopsComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    DxListModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxBoxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
