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
    return this.widgetData;
  }
  
    addnewShipperConsignee(newShipperConsignee: any) {
       console.log('newShipperConsignee >>',newShipperConsignee);

 /*   let lastShipperConsignee = this.widgetData && this.widgetData.length ? this.widgetData[this.widgetData.length-1] : null;
    if(typeof(newShipperConsignee) == 'object' && !Array.isArray(newShipperConsignee)) {
      if(lastShipperConsignee.Properties)
        newShipperConsignee.id = lastShipperConsignee.id + 1;
      else
        newShipperConsignee.id = 1;  
      this.widgetData.push(newShipperConsignee);
      console.log('newShipperConsignee >>',newShipperConsignee);
    }*/
  }
}
 