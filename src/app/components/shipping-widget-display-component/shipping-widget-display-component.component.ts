import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../services/widget.service';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule , DxDataGridModule,DxPopoverModule} from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';

@Component({
  selector: 'app-shipping-widget-display-component',
  templateUrl: './shipping-widget-display-component.component.html',
  styleUrls: ['./shipping-widget-display-component.component.css']
})
export class ShippingWidgetDisplayComponentComponent implements OnInit {
	selectedWidgetInfo: any = {};
	selectedType: string = "";
	isAddressBookPopupVisible: boolean = false;
	isAddContactPopupVisible: boolean = false;
	addressBookAddresses: any = []; 
	newContact : any = {
		"Name": "",
    "Account_no": "",
    "Address": "",
    "Country": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Phone": "",
    "Fax": "",
    "Tax_ID_Name": "",
    "Tax_ID_Refrence": "",
    "IATA_Agent_Code": "",
    "CASS_Code": ""
	}

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {

  }

  openAddressBookPopup(data) {
  	console.log("address book popup>>>", data);
  	this.selectedWidgetInfo = data && data.widgetInfo;
  	this.selectedType = data && data.type;
  	this.isAddressBookPopupVisible = true;
  }

  openAddContactPopup(data) {
  	console.log("add contact popup>>>", data);
  	this.selectedType = data && data.type;
  	this.isAddContactPopupVisible = true;
  }

  saveNewDetails(event) {
  	console.log("data to be saved>>>", event, this.newContact, this.selectedType);
  	switch(this.selectedType) {
  		case 'Shipper':
  			this.newContact.Header = "Shipper & Consignee’s Name and Address";
  			break;
  		case 'Carrier Agent': 
  			this.newContact.Header = "Issuing Carrier’s Agent Name";
  			break;
  		case 'Carrier':
  			this.newContact.Header = "Issuing Carrier’s Name & Address";
  			break;
  		default:
  			this.newContact.Header = "";
  	}
  	this.widgetService.addContact(Object.assign({},this.newContact), this.selectedType);
		this.isAddContactPopupVisible = false;
  }
}