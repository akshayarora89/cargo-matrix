import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mops',
  templateUrl: './mops.component.html',
  styleUrls: ['./mops.component.css']
})

export class MopsComponent implements OnInit {

	dataSource: any;
  processdataSource:any;
  subdataSource:any;

  isVisible: boolean = false;
  isMopProcessesVisible: boolean = false;
  isSubProcessesVisible: boolean = false;

  selectedProcess: any = {};
  selectedSubProcess:any={};

  iqCode: any = {};
  showIqCode: boolean = false;
  withTemplateVisible = false;

  companyId: string = "";
  companyName: string = "";
  defaultLogo: string = "assets/images/cm_IATA.ico";
  
  constructor(private productService: ProductService, private location: Location) {}
   
  ngOnInit() {
    this.selectedSubProcess = this.productService.getSelectedProcess();
    this.setDataSource();
  }
  
  setDataSource() {

      this.dataSource = new DataSource({
      store: this.productService.getCompanies(),
      searchOperation: "contains",
      searchExpr: "name"
     }); 

     if(this.isMopProcessesVisible){
      this.processdataSource = new DataSource({
      store: this.productService.getProcesses(),
      searchOperation: "contains",
      searchExpr: "description"
       }); 
     } 

     if(this.isSubProcessesVisible){
        this.subdataSource = new DataSource({
        store: this.selectedSubProcess.workflow,
        searchOperation: "contains",
        searchExpr: "description"
        });
     }
  }

  search(e) {
    this.dataSource.searchValue(e.value);
    this.dataSource.load();

    if(this.isMopProcessesVisible){
    this.processdataSource.searchValue(e.value);
    this.processdataSource.load();
    }
    if(this.isSubProcessesVisible){
    this.subdataSource.searchValue(e.value);
    this.subdataSource.load();
    }
  }

  onArrowBack(e){
   this.location.back();
  }

 setIqCode(subProcess){
  let iqCodeObject = subProcess.workflowIQCodes && subProcess.workflowIQCodes.length > 0 ? subProcess.workflowIQCodes[0].iqcode : null;
  this.iqCode = iqCodeObject ? `${iqCodeObject.milestone}\n${iqCodeObject.meaning}\n${iqCodeObject.notes}` : "No IQCode";
  }

  updateIqCodeOnMouseOver(subProcess) {
    this.setIqCode(subProcess);
    this.showIqCode = true;
  }

  updateIqCodeOnMouseOut() {
    this.showIqCode = false;
  }

  openAddCompanyPopup() {
    this.isVisible = true;
  }

  addCompany() {
    let newCompany = {
      name: this.companyName,
      logo: this.defaultLogo
    }
    this.productService.addCompany(newCompany);
    this.setDataSource();
  }

  fetchCurrentCompany(company) {
    if(company)
    this.productService.setSelectedCompany(company);
    this.isMopProcessesVisible = true;
    this.setDataSource();
  }

  setSelectedProcess(process) {
    this.productService.setSelectedProcess(process);
    this.isSubProcessesVisible = true;
    this.selectedSubProcess = process;
    this.setDataSource();
  }

  setSelectedSubProcess(subProcess) {
    this.productService.setSelectedSubProcess(subProcess);
  }

  toggleWithTemplate() {
        this.withTemplateVisible = !this.withTemplateVisible;
  }

}




  
