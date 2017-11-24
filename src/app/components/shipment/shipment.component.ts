import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'shipment-component',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class shipmentComponent implements OnInit {


	widgetData:any;
	@Input() data: any;
  @Output() openAddressBook: EventEmitter<any> = new EventEmitter();
  @Output() openAddMemberPopup: EventEmitter<any> = new EventEmitter();
  widgetInfo:any = {
    Name: ""
  };
  widgetProperty: any = {
    Header: "",
    Name : "",
    Account_no: "",
    Address: "",
    City: "",
    State: "",
    PostalCode: "",
    Phone: "",
    Country: "",
    Fax: "",
    Email: "",
    Tax_ID_Name: "",
    Tax_ID_Refrence: "",
    IATA_Agent_Code: "",
    CASS_Code: ""
  };
  

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgetProperty = this.data;
  }
  emitAddressBookEvent() {
    this.widgetData = this.widgetService.getData();
    this.widgetInfo = this.widgetData;
    this.openAddressBook.emit({ data: this.data});
  }
}


