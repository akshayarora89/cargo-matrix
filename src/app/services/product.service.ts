import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  companiesData: any = [{
     id: 1,
     name: "IATA CARGO IQ",
     logo: "assets/images/cm_IATA.ico"
   },{
     id: 2,
     name: "DHL GLOBAL FORWARDING MOP",
     logo: "assets/images/cm_DHL.ico"
   },
   {
     id: 3,
     name: "DAIMLER GROUP MOP",
     logo: "assets/images/cm_DAILMER.png"
   },
   {
     id: 4,
     name: "ISRAELI AEROSPACE MOP",
     logo: "assets/images/cm_ISRAELI.png"
   },
   {
     id: 5,
     name: "FLOUR MOP",
     logo: "assets/images/cm_FLOUR.png"
   },
   {
     id: 6,
     name: "AMERICAN AIRLINES MOP",
     logo: "assets/images/cm_AmericanAirlines.ico"
   }];
   processes: any = [];
   selectedCompany: any = {};
   selectedProcess: any = {};
   selectedSubProcess: any = {};

  constructor(private http: Http) { 
    this.getProcessesFromFile('CargoiQMOP').subscribe((data) => {
      this.processes = data;
    });
  }

  getCompanies(): any {
    return this.companiesData;
  }

  getProcesses(): any {
    return JSON.parse(this.processes);
  }

  getProcessesFromFile(filename) {
    return this.http
      .get('assets/companies/'+ filename + '.json')
      .map(processes => processes.text());
  }

  addCompany(company: any) {
    let lastCompany = this.companiesData && this.companiesData.length ? this.companiesData[this.companiesData.length-1] : null;
    if(typeof(company) == 'object' && !Array.isArray(company)) {
      if(lastCompany)
        company.id = lastCompany.id + 1;
      else
        company.id = 1;  
      this.companiesData.push(company);
    }
  }

  setSelectedCompany(company: any) {
    this.selectedCompany = typeof(company) == 'object' && !Array.isArray(company) ? company : {};
  }

  setSelectedProcess(process: any) {
    this.selectedProcess = typeof(process) == 'object' && !Array.isArray(process) ? process : {};
  }

  getSelectedProcess(): any {
    return this.selectedProcess;
  }

  setSelectedSubProcess(subProcess: any) {
    this.selectedSubProcess = typeof(subProcess) == 'object' && !Array.isArray(subProcess) ? subProcess : {};
  }

  getSelectedSubProcess(): any {
    return this.selectedSubProcess;
  }
}


