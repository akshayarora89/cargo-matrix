import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule,DxBoxModule ,DxTemplateModule, DxFormModule, DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-process-mops',
  templateUrl: './sub-process-mops.component.html',
  styleUrls: ['./sub-process-mops.component.css']
})
export class SubProcessMopsComponent implements OnInit {

  dataSource: any;
	selectedProcess: any = {};
	iqCode: any = {};
	showIqCode: boolean = false;
	
	constructor(private productService: ProductService, private location: Location) {}
  
  ngOnInit() {
  	this.selectedProcess = this.productService.getSelectedProcess();
  	this.setDataSource();
  }

  setDataSource() {
    this.dataSource = new DataSource({
      store: this.selectedProcess.workflow,
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

   setIqCode(subProcess) {
  	let iqCodeObject = subProcess.workflowIQCodes && subProcess.workflowIQCodes.length ? subProcess.workflowIQCodes[0].iqcode : "No IQCode"; 
  	if(typeof(iqCodeObject) == "object" && !Array.isArray(iqCodeObject)) {
  		this.iqCode = `${iqCodeObject.milestone}\n${iqCodeObject.meaning}\n${iqCodeObject.notes}`;	
  	} else {
  		this.iqCode = "No IqCode";
  	}
  }

  updateIqCodeOnMouseOver(subProcess) {
  	this.setIqCode(subProcess);
  	this.showIqCode = true;
  }

  updateIqCodeOnMouseOut() {
  	this.showIqCode = false;
  }

  onArrowBack(e){
    this.location.back();
  }
}
