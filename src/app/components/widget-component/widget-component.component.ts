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
  widgetInfo:any;
  WidgetHolderName:String;
  WidgetProperties:any;
  WidgetAddress:any;
  infoProperty:any;
  shipperName:any;
  shipperAccountNo:any;
  shipperAddress:any;
  complieAddress:any;
  displayAddress:any;
  specificType:any;
  IATA_Agent_Code:any;
  CASS_Code:any;
  city:any;
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
      this.WidgetHolderName = this.widgetInfo.Name;
      this.WidgetProperties=this.widgetInfo.Properties;
      this.infoProperty=this.WidgetProperties[0];
      this.newVar  = this.WidgetProperties[0].Address;
      this.columns=Object.keys(this.newVar);  
      this.getAddressarr(this.WidgetProperties);
      this.IATA_Agent_Code = this.infoProperty.IATA_Agent_Code;
      this.CASS_Code = this.infoProperty.CASS_Code;
      this.shipperName=this.infoProperty.Name;
      this.shipperAccountNo=this.infoProperty.Account_no;
      this.shipperAddress=this.infoProperty.Address;
      this.city = this.shipperAddress.City;
      this.displayAddress=this.getAddress().complieAddress;
    });
  }

  getAddressarr(abcd):any{
    for (let i = 0; i < this.WidgetProperties.length; i++) { 
     this.address.push(this.WidgetProperties[i].Address);
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
