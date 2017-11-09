import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetService } from '../../services/widget.service';
import { DxTextBoxModule, DxListModule, DxTemplateModule, DxFormModule,
         DxFormComponent , DxSelectBoxModule , DxDataGridModule,DxPopoverModule, DxPopupComponent} from 'devextreme-angular';
import  DataSource  from 'devextreme/data/data_source';

@Component({
  selector: 'app-shipping-widget-display-component',
  templateUrl: './shipping-widget-display-component.component.html',
  styleUrls: ['./shipping-widget-display-component.component.css']
})
export class ShippingWidgetDisplayComponentComponent implements OnInit {
  @ViewChild("addressBookPopup") addressPopup: DxPopupComponent
  @ViewChild("addContactPopup") contactPopup: DxPopupComponent
	selectedWidgetInfo: any = {};
	selectedType: string = "";
	isAddressBookPopupVisible: boolean = false;
	isAddContactPopupVisible: boolean = false;
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
  	this.selectedWidgetInfo = data && data.widgetInfo;
  	this.selectedType = data && data.type;
  	this.showAddressBookPopup();
  }

  openAddContactPopup(data) {
  	this.selectedType = data && data.type;
    this.showAddContactPopup();
  }

  hideAddContactPopup(){
    this.contactPopup.instance.hide();
  }
  showAddContactPopup(){
    this.contactPopup.instance.show();
  }
  showAddressBookPopup(){
    this.addressPopup.instance.show();
  }

  saveNewDetails(event) {
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
    this.hideAddContactPopup();
  }

  addContactPopupHidden() {
    this.newContact = {};
  }
  onCellPrepared(e) {
      if (e.rowType === "data" && e.column.command === "edit") {
          var isEditing = e.row.isEditing,
              $links = e.cellElement.find(".dx-link");

          $links.text("");

          if (isEditing) {
              $links.filter(".dx-link-save").addClass("dx-icon-save");
              $links.filter(".dx-link-cancel").addClass("dx-icon-revert");
          } else {
              $links.filter(".dx-link-edit").addClass("dx-icon-edit");
              $links.filter(".dx-link-delete").addClass("dx-icon-trash");
          }
      }
  }

  onContentReady(e) {
     e.component.columnOption("command:edit", {
        visibleIndex: 1,
        width: 80
    });
  }
}