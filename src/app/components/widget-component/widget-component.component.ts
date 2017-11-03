import { Component, Input, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule , DxDataGridModule} from 'devextreme-angular';
import { WidgetService } from '../../services/widget.service';
import  DataSource  from 'devextreme/data/data_source';


@Component({
  selector: 'app-widget-component',
  templateUrl: './widget-component.component.html',
  styleUrls: ['./widget-component.component.css']
})
export class WidgetComponentComponent implements OnInit {


	widgetData:any;
	dataSource: any;
	data: any;
	@Input() type: any;
  @Input() event: any;
  widgetInfo:any = {
    Name: ""
  };
  WidgetProperties:any;
  WidgetAddress:any;
  infoProperty:any={
   Name :"",
   Account_no:"",
   Address:"",
   IATA_Agent_Code:"",
   CASS_Code:""
  };
  shipperAddress:any={
    City:""
  };
  complieAddress:any;
  displayAddress:any;
  isVisible: boolean = false;
  AddressBookDetails=[];
  address=[];
  columns=[];
  newVar:any;


  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    
		this.widgetService.getWidgetDataFromFile('shippingWidget').subscribe((data) => {
      
      this.widgetData = data && JSON.parse(data);
      this.widgetInfo = this.widgetData[this.type];
      this.WidgetProperties=this.widgetInfo.Properties;
      this.infoProperty=this.WidgetProperties[0];
      this.newVar  = this.WidgetProperties[0].Address;
      this.columns=Object.keys(this.newVar);  
      this.getAddressarr(this.WidgetProperties);
      this.shipperAddress=this.infoProperty.Address;
      this.displayAddress=this.getAddress().complieAddress;
    });
  }

  getAddressarr(abcd):any{
    for (let i = 0; i < this.WidgetProperties.length; i++) { 
     this.address.push(this.WidgetProperties[i].Address);
     this.address[i].CompanyName=this.WidgetProperties[i].Name;
    }
  return this.address; 
  };

  getAddress():any{

    this.shipperAddress=this.infoProperty.Address;
    this.complieAddress=this.shipperAddress.StreetAddress+ " " +this.shipperAddress.CountryName+" "+this.shipperAddress.City+
    " "+this.shipperAddress.CountryCode+" "+this.shipperAddress.PostalCode + " Phone No.:" + this.shipperAddress.Phone+
    " "+ "  Tax ID Name:" +this.infoProperty.Tax_ID_Name;

    return this.complieAddress; 
  }

    openAddressBook() {
    console.log('i am clicked');
    this.isVisible = true;
  }

}
