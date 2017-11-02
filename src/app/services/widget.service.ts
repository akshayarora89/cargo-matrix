import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {

	widgetData: any = {};

  constructor(private http: Http) { 
  	this.getWidgetDataFromFile('shippingWidget').subscribe((data) => {
      this.widgetData = data && JSON.parse(data);
      console.log('widgetData in service>>>>>>',this.widgetData);
    });
  }
  getWidgetDataFromFile(filename) {
    return this.http.get('assets/data/widget/'+ filename + '.json')
      .map(widgetData => widgetData.text());
  }
  getData(): any {
    return this.widgetData;
  }
}
