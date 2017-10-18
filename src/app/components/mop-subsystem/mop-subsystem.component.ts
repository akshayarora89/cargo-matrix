import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule,DxBoxModule ,DxTemplateModule, DxFormModule, DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mop-subsystem',
  templateUrl: './mop-subsystem.component.html',
  styleUrls: ['./mop-subsystem.component.css']
})
export class MopSubsystemComponent implements OnInit {

  dataSource: any;
	selectedSubProcess: any = {};

	constructor(private productService: ProductService, private location: Location) {}
  
  ngOnInit() {
  	this.selectedSubProcess = this.productService.getSelectedSubProcess();
  	this.setDataSource();
  }

  setDataSource() {
    this.dataSource = new DataSource({
      store: this.selectedSubProcess.workflowSubstep,
      searchOperation: "contains",
      searchExpr: "description"
    });
  }

  search(e) {
    this.dataSource.searchValue(e.value);
    this.dataSource.load();
  }

  setSelectedSubProcess(subProcess) {
  	this.productService.setSelectedSubProcess(subProcess);
  }

  onArrowBack(e){
    this.location.back();
  }
  
}
