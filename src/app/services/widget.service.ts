import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {

	widgetData: any = {};

  constructor(private http: Http) { 
  	this.getWidgetDataFromFile('shippingWidget').subscribe((data) => {
      this.widgetData = data && JSON.parse(data);
    });
  }
  getWidgetDataFromFile(filename) {
    return this.http.get('assets/data/widget/'+ filename + '.json')
      .map(widgetData => widgetData.text());
  }
  getData(): any {
    console.log("data>>>>", this.widgetData);
    return this.widgetData;
  }

  addContact(newContact: any, type: string) {
    if(this.widgetData[type] && this.widgetData[type].Properties)
      this.widgetData[type].Properties.push(newContact);
  }
}
 