import { Component, Input, OnInit } from '@angular/core';
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




  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
		this.widgetService.getWidgetDataFromFile('shippingWidget').subscribe((data) => {
      this.widgetData = data && JSON.parse(data);
      this.widgetInfo = this.widgetData[this.type];

      this.WidgetHolderName = this.widgetInfo.Name;
      this.WidgetProperties=this.widgetInfo.Properties;

      this.infoProperty=this.WidgetProperties[0];
      this.shipperName=this.infoProperty.Name;
      this.shipperAccountNo=this.infoProperty.Account_no;
      this.shipperAddress=this.infoProperty.Address;
      this.displayAddress=this.getAddress().complieAddress;
    });
  }

  getAddress():any{
    this.shipperAddress=this.infoProperty.Address;
    this.complieAddress=this.shipperAddress.StreetAddress+ " " +this.shipperAddress.CountryName+" "+this.shipperAddress.City+
    " "+this.shipperAddress.CountryCode+" "+this.shipperAddress.PostalCode + " Phone No.:" + this.shipperAddress.Phone+
    " "+ "  Tax ID Name:" +this.infoProperty.Tax_ID_Name;
    return this.complieAddress; 
  }

}
