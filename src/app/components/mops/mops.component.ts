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
   ProcessCodeId: any;
   TopicId:any;
   Process:string;
   Phase:string;
   Icon32: any = "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png";

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

  public isVisible = false;
    onButtonClick(e) {
        this.isVisible = true;
      }
        
    onSubmit(e){
        let newProcess = {
          ProcessCodeId: this.ProcessCodeId,
          TopicId:this.TopicId,
          Process:this.Process,
          Icon32:this.Icon32,
          Phase:this.Phase
        };
        this.service.addSubProcess(newProcess);
        this.dataSource = new DataSource({
            store: this.service.getProducts(),
            searchOperation: "contains",
            searchExpr: "Process"
        });        
    }


}




  
