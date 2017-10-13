import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule } from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-mops',
  templateUrl: './mops.component.html',
  styleUrls: ['./mops.component.css']
})



export class MopsComponent implements OnInit {

		dataSource: any;
    process: any;
    constructor(private service: ProductService) {
        this.dataSource = new DataSource({
            store: service.getProducts(),
            searchOperation: "contains",
            searchExpr: "Process"
        });
    }
  ngOnInit() {
  }
    search(e) {
        this.dataSource.searchValue(e.value);
        this.dataSource.load();
    }

    plusClick() {
    alert("The button was clicked");
  }

 setprocessSelected(abc) {
   this.service.setSelectedProcess(abc);
 }


}




  
