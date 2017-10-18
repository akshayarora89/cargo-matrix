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
  isVisible: boolean = false;
  companyId: string = "";
  companyName: string = "";
  defaultLogo: string = "assets/images/cm_IATA.ico";
  
  constructor(private productService: ProductService) {}
   
  ngOnInit() {
    this.setDataSource();  
  }
  
  setDataSource() {
    this.dataSource = new DataSource({
      store: this.productService.getCompanies(),
      searchOperation: "contains",
      searchExpr: "name"
    });
  }

  search(e) {
    this.dataSource.searchValue(e.value);
    this.dataSource.load();
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

  updateCurrentCompany(company) {
    if(company)
      this.productService.setSelectedCompany(company);
  }
}




  
