import { NgModule } from '@angular/core';
import { DxTextBoxModule, 
  DxListModule,DxBoxModule,
  DxTemplateModule,
  DxPopupModule,DxTooltipModule,
  DxFormModule,DxDataGridModule,DxPopoverModule,
  DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    DxTextBoxModule,
    DxListModule,
    DxBoxModule,
    DxTemplateModule,
    DxPopupModule,
    DxTooltipModule,
    DxFormModule,
    DxDataGridModule,
    DxPopoverModule,
    DxButtonModule,
    DxSelectBoxModule
  ],
})
export class DevExtremeComponentsModule {

  constructor() {
    //console.log("DevExtremeComponentsModule.constructor()");
  }

}
