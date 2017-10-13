import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule,DxBoxModule ,DxTemplateModule, DxFormModule, DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sub-process-mops',
  templateUrl: './sub-process-mops.component.html',
  styleUrls: ['./sub-process-mops.component.css']
})
export class SubProcessMopsComponent implements OnInit {

  dataSource: any;
  processId: string;
    constructor(private service: ProductService) {
        this.dataSource = new DataSource({
            store: service.getsubProcessesData(),
            searchOperation: "contains",
            searchExpr: "description"
        });
}
  ngOnInit() {
  	this.processId = this.service.getSelectedProcess();
  	
  }
  getWorkflowDescription(workflow, processId): string {
  	let object: any = null;
  	if(workflow && workflow.length) {
  		object = workflow.filter((object) => {
  			return object.processId == processId.replace(/[^\d.]/g, '');
  		});
  	}
  	return object.length ? object[0].description : '';
  }
}
