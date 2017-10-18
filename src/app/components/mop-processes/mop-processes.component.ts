import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mop-processes',
  templateUrl: './mop-processes.component.html',
  styleUrls: ['./mop-processes.component.css']
})
export class MopProcessesComponent implements OnInit {

	dataSource: any;
  constructor(private productService: ProductService, private location: Location) { }

  ngOnInit() {
  	this.setDataSource();
  }

  setDataSource() {
    this.dataSource = new DataSource({
      store: this.productService.getProcesses(),
      searchOperation: "contains",
      searchExpr: "description"
    });
  }

  search(e) {
    this.dataSource.searchValue(e.value);
    this.dataSource.load();
  }

  setSelectedProcess(process) {
  	this.productService.setSelectedProcess(process);
  }

  onArrowBack(e){
    this.location.back();
  }

}
