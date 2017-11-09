import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'app-widget-component',
  templateUrl: './widget-component.component.html',
  styleUrls: ['./widget-component.component.css']
})
export class WidgetComponentComponent implements OnInit {


	widgetData:any;
	@Input() type: any;
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
  }

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    
		this.widgetService.getWidgetDataFromFile('shippingWidget').subscribe((data) => {
      this.widgetData = data && JSON.parse(data);
      this.widgetInfo = this.widgetData[this.type];
      this.widgetProperty= this.widgetInfo.Properties && this.widgetInfo.Properties.length ? this.widgetInfo.Properties[0] : this.widgetProperty;
    });
  }

  emitAddressBookEvent() {
    this.widgetData = this.widgetService.getData();
    this.widgetInfo = this.widgetData[this.type];
    this.openAddressBook.emit({widgetInfo: this.widgetInfo, type: this.type});
  }
}
