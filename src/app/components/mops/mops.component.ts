import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxFormComponent, DxTooltipComponent } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '@app/services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mops',
  templateUrl: './mops.component.html'
})

export class MopsComponent implements OnInit {

  @ViewChildren(DxTooltipComponent) toolTips: QueryList<DxTooltipComponent>;
  processesTitle: String = "MOPS";

	processesDataSource: any;
  currentProcessType: String = 'MOPS';

  isVisible: boolean = false;
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
    switch(this.currentProcessType) {
      case 'MOPS': 
        this.processesDataSource = new DataSource({
          store: this.productService.getCompanies(),
          searchOperation: "contains",
          searchExpr: "name"
        });
        this.processesTitle = 'MOPS';
        break;
      case 'process':
        this.processesDataSource = new DataSource({
          store: this.productService.getProcesses(),
          searchOperation: "contains",
          searchExpr: "description"
        });
        this.processesTitle = 'MOP Processes';
        break;
      case 'sub-process':
        this.processesDataSource = new DataSource({
          store: this.selectedSubProcess.workflow,
          searchOperation: "contains",
          searchExpr: "description"
        });
        this.processesTitle = 'MOP Sub Processes';
        break;
      default: 
        this.processesDataSource = new DataSource({
          store: this.productService.getCompanies(),
          searchOperation: "contains",
          searchExpr: "name"
        });
        this.processesTitle = 'MOPS';
    }
  }

  search(e) {
    this.processesDataSource.searchValue(e.value);
    this.processesDataSource.load();
  }

  onArrowBack(e){
    switch(this.currentProcessType) {
      case 'MOPS': 
        this.location.back();
        break;
      case 'process':
        this.currentProcessType = 'MOPS';
        break;
      case 'sub-process':
        this.currentProcessType = 'process';
        break;
      default:
        this.location.back();
    }
    this.setDataSource();
  }

  selectProcess(data) {
    switch(this.currentProcessType) {
      case 'MOPS':
        this.currentProcessType = 'process';
        this.setDataSource();
        break;
      case 'process':
        this.currentProcessType = 'sub-process';
        this.setSelectedProcess(data);
        this.setDataSource();
        break;
      case 'sub-process':
        this.setSelectedSubProcess(data);
        break;
      default:
        this.currentProcessType = 'MOPS';
        this.setDataSource();  
    }
  }

  getCurrentImgSrc(data) {
    let imgSrc = "";
    switch(this.currentProcessType) {
      case 'MOPS':
        imgSrc = data.logo;
        break;
      case 'process':
        imgSrc = data.icon32;
        break;
      case 'sub-process':
        imgSrc = data.workflowSubstep.length ? data.workflowSubstep[0].icon32 : '';
        break;
    }
    return imgSrc;
  }

  getCurrentProcessDescription(data) {
    let processDesc = "";
    switch(this.currentProcessType) {
      case 'MOPS':
        processDesc = data.name;
        break;
      case 'process':
        processDesc = `${data.topicId}-${data.description}`;
        break;
      case 'sub-process':
        processDesc = data.description;
        break;
    }
    return processDesc; 
  }

  addCompany() {
    let newCompany = {
      name: this.companyName,
      logo: this.defaultLogo
    }
    this.productService.addCompany(newCompany);
    this.setDataSource();
  }

  setSelectedProcess(process) {
    this.productService.setSelectedProcess(process);
    this.selectedSubProcess = process;
  }

  setSelectedSubProcess(subProcess) {
    this.productService.setSelectedSubProcess(subProcess);
  }

  setIqCode(subProcess) {
    let iqCodeObject = subProcess.workflowIQCodes && subProcess.workflowIQCodes.length > 0 ? subProcess.workflowIQCodes[0].iqcode : null;
    this.iqCode = iqCodeObject ? `${iqCodeObject.milestone}\n${iqCodeObject.meaning}\n${iqCodeObject.notes}` : "No IQCode";
  }

  showTooltip(evt, data) {
    if(this.currentProcessType == 'sub-process') {
      this.toolTips.forEach((tooltipRef) => {
        if(tooltipRef.target.replace('#', '') == evt.target.id) {
          this.setIqCode(data);
          tooltipRef.instance.show();
        }
      });  
    }
  }

  hideTooltip() {
    this.toolTips.forEach((tooltipRef) => {
      tooltipRef.instance.hide();
    });
  }
}