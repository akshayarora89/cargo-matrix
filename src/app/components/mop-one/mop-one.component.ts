import { Component, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
DxFormComponent,DxPopupModule,DxPopupComponent} from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';
import { Employee,ProductService } from '../../services/product.service';




@Component({
  selector: 'app-mop-one',
  templateUrl: './mop-one.component.html',
  styleUrls: ['./mop-one.component.css']
})
export class MopOneComponent implements OnInit {

   private MyPopup: DxPopupComponent;
    @ViewChild(DxFormComponent) myForm:DxFormComponent; 

   dataSource: any;
   employee: Employee;
   formId: any;
   name:string;
   logo: any = "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png";

    constructor(private service: ProductService) {
        this.dataSource = new DataSource({
            store: service.getmopData(),
            searchOperation: "contains",
            searchExpr: "Name"
        });
        this.employee = service.getEmployee();
    }
  ngOnInit() {}
    search(e) {
        this.dataSource.searchValue(e.value);
        this.dataSource.load();
    }
    
   /* plusClick() {
        this.isVisible = true;
        console.log(this.isVisible);
    }
    isVisible = true;*/
    public isVisible = false;
    onButtonClick(e) {
        this.isVisible = true;
      }
        
    onSubmit(e){
      console.log("id>>>>", this.formId);
        let newProcess = {
          Id: this.formId,
          Name:this.name,
          logo:this.logo
        };
        this.service.addProcess(newProcess);
        this.dataSource = new DataSource({
            store: this.service.getmopData(),
            searchOperation: "contains",
            searchExpr: "Name"
        });        
    }




}
