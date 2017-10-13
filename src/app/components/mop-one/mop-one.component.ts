import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxSelectBoxModule} from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-mop-one',
  templateUrl: './mop-one.component.html',
  styleUrls: ['./mop-one.component.css']
})
export class MopOneComponent implements OnInit {

   dataSource: any;
    constructor(service: ProductService) {
        this.dataSource = new DataSource({
            store: service.getmopData(),
            searchOperation: "contains",
            searchExpr: "Name"
        });
    }
  ngOnInit() {}
    search(e) {
        this.dataSource.searchValue(e.value);
        this.dataSource.load();
    }
    plusClick() {
    alert("The button was clicked");
  }

}
