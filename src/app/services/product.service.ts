import { Injectable } from '@angular/core';




export class Product {
    ProcessCodeId: number;
    TopicId:any;
    Process: string;
    MOPSegment: string;
    Phase: string;
    Icon32: string;
}

export class Mop {
    Id: number;
    Name: string;
    logo: string;
}

export class SubPro {
    topicId: any;
      activityTypeId: number;
      roleId:number;
      phaseId:number;
      description:string;
      Icon32: string;
      dateCreated:string;
      workflow: [{
          processId:number;
          step:number;
          description:string;
          security_status:string;
          milestones:string;
          workflowIQCodes:any;
          iqCodes: null;
          id:number
        }];
      activityTypes: null;
      role: null;
      phases: null;
      id: number;
}



let sub: SubPro[] = [{
      topicId: "P01",
      activityTypeId: 1,
      roleId: 1,
      phaseId: 3,
      description: "Plan and Book",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png",
      dateCreated: "2017-10-04T13:20:28.323",
      workflow: [{
          processId: 1,
          step: 1,
          description: "Receive booking from shipper and check",
          security_status: "",
          milestones: "",
          workflowIQCodes: [],
          iqCodes: null,
          id: 1
        },{
          processId: 1,
          step: 2,
          description: "Shipper provides shipment details",
          security_status: "",
          milestones: "",
          workflowIQCodes: [],
          iqCodes: null,
          id: 2
        },
        {
          processId: 1,
          step: 3,
          description: "Plan routing direct or consolidation",
          security_status: "",
          milestones: "",
          workflowIQCodes: [],
          iqCodes: null,
          id: 3
        },
        {
          processId: 1,
          step: 4,
          description: "Request capacity against forwarder or carrier",
          security_status: "",
          milestones: "",
          workflowIQCodes: [],
          iqCodes: null,
          id: 4
        },
        {
          processId: 1,
          step: 5,
          description: "Confirm capacity",
          security_status: "",
          milestones: "BKD",
          workflowIQCodes: [
            {
              iqCodeId: 1,
              workflowId: 5,
              iqcode: {
                milestone: "BKD",
                meaning: "Booked",
                notes: "FSU message sent by carrier to advise orupdate booking information.",
                required: true,
                dateCreated: "2017-10-04T13:20:28.17",
                id: 1
              },
              id: 1
            }
          ],
          iqCodes: null,
          id: 5
        },
        {
          processId: 1,
          step: 6,
          description: "Create Routemaps",
          security_status: "",
          milestones: "RMI / RMP",
          workflowIQCodes: [
            {
              iqCodeId: 16,
              workflowId: 6,
              iqcode: {
                milestone: "RMI",
                meaning: "Route Map Information",
                notes: "Sent by forwarder to their CDMP-F",
                required: false,
                dateCreated: "2017-10-04T13:20:28.18",
                id: 16
              },
              id: 2
            },
            {
              iqCodeId: 17,
              workflowId: 6,
              iqcode: {
                milestone: "RMP",
                meaning: "Route Map Plan",
                notes: "CDMP-C sends the RMP to the applicable CDMP - F ",
                required: false,
                dateCreated: "2017-10-04T13:20:28.18",
                id: 17
              },
              id: 3
            }
          ],
          iqCodes: null,
          id: 6
        },{
          processId: 1,
          step: 7,
          description: "Arrange pick-up of freight",
          security_status: "",
          milestones: "",
          workflowIQCodes: [],
          iqCodes: null,
          id: 7
        }

],
      activityTypes: null,
      role: null,
      phases: null,
      id: 1
    }];


let products: Product[] = [{
      ProcessCodeId: 1,
      TopicId: "P01",
      Process: "Plan and Book",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },{
      ProcessCodeId: 2,
      TopicId: "P02",
      Process: "Pick up from shipper",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/2_0-32.png"
    },{
      ProcessCodeId: 3,
      TopicId: "P03",
      Process: "Receive freight at Forwarder branch facility",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/3_0-32.png"
    },{
      ProcessCodeId: 4,
      TopicId: "P04",
      Process: "Transfer to Forwarder HUB",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/4_0-32.png"
    },{
      ProcessCodeId: 5,
      TopicId: "P05",
      Process: "Prepare export shipment",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/5_0-32.png"
    },
    {
      ProcessCodeId: 6,
      TopicId: "P06",
      Process: "Transfer shipment to carrier domain ",
      MOPSegment: "ORIGIN ACTIVITIES FORWARDER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/6_0-32.png"
    },
    {
     ProcessCodeId: 7,
      TopicId: "P07",
      Process: "Receive shipment into carrier domain",
      MOPSegment: "ORIGIN ACTIVITIES CARRIER",
      Phase: "D2D EXPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/7_0-32.png"
    },
    {
      ProcessCodeId: 8,
      TopicId: "P08",
      Process: "Accept shipment as ready for carriage",
      MOPSegment: "ORIGIN ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/8_0-32.png"
    },
    {
      ProcessCodeId: 9,
      TopicId: "P09",
      Process: "Prepare freight for transport",
      MOPSegment: "TRANSPORT ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/9_0-32.png"
    },
    {

      ProcessCodeId: 10,
      TopicId: "P10",
      Process: "Dispatch shipment to flight, load and depart",
      MOPSegment: "TRANSPORT ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/10_0-32.png"
    },
    {
      ProcessCodeId: 11,
      TopicId: "P11",
      Process: "Distribute information",
      MOPSegment: "TRANSPORT ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/11_0-32.png"
    },
    {
      ProcessCodeId: 12,
      TopicId: "P12",
      Process: "Arrive Flight, offload and dispatch shipments to warehouse",
      MOPSegment: "TRANSPORT ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/12_0-32.png"
    },
    {
      ProcessCodeId: 13,
      TopicId: "P13",
      Process: "Check in shipments",
      MOPSegment: "TRANSPORT ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/13_0-32.png"
    },
    {
      ProcessCodeId: 14,
      TopicId: "P14",
      Process: "Arrive Shipment",
      MOPSegment: "DESTINATION ACTIVITIES CARRIER",
      Phase: "A2A ",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/14_0-32.png"

    },
    {
      ProcessCodeId: 15,
      TopicId: "P15",
      Process: "Hand over freight to forwarder",
      MOPSegment: "DESTINATION ACTIVITIES CARRIER",
      Phase: "D2D IMPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/15_0-32.png"
    },
    {
      ProcessCodeId: 16,
      TopicId: "P16",
      Process: "Arrive shipments at destination forwarder hub",
      MOPSegment: "DESTINATION ACTIVITIES FORWARDER",
      Phase: "D2D IMPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/16_0-32.png"
    },
    {
      ProcessCodeId: 17,
      TopicId: "P17",
      Process: "Transfer shipment to forwarder branch facility",
      MOPSegment: "DESTINATION ACTIVITIES FORWARDER",
      Phase: "D2D IMPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/17_0-32.png"
    },
    {
      ProcessCodeId: 18,
      TopicId: "P18",
      Process: "Load delivery vehicle and produce run sheet",
      MOPSegment: "DESTINATION ACTIVITIES FORWARDER",
      Phase: "D2D IMPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/18_0-32.png"
    },
    {
      ProcessCodeId: 19,
      TopicId: "P19",
      Process: "Deliver & obtain POD",
      MOPSegment: "DESTINATION ACTIVITIES FORWARDER",
      Phase: "D2D IMPORT",
      Icon32: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/19_0-32.png"
    }];

    let mops: Mop[] = [{
      Id: 1,
      Name: "IATA CARGO IQ",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },{
      Id: 2,
      Name: "DHL GLOBAL FORWARDING MOP",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },
    {
      Id: 3,
      Name: "DAIMLER GROUP MOP",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },
    {
      Id: 4,
      Name: "ISRAELI AEROSPACE MOP",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },
    {
      Id: 5,
      Name: "FLOUR MOP",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    },
    {
      Id: 6,
      Name: "AMERICAN AIRLINES MOP",
      logo: "https://storage.googleapis.com/lnc-proovv-dev.appspot.com/cargo-iq-mop/1_0-32.png"
    }];


@Injectable()
export class ProductService {

  processSelected: string = ''; 

  constructor() { 
  }

  getProducts() : Product[] {
        return products;
    }
  getmopData() : Mop[] {
      return mops;
  }
  getsubProcessesData() : SubPro[] {
      return sub;
  }

  setSelectedProcess(process) {
    this.processSelected = process;
  }

  getSelectedProcess() {
    return this.processSelected;
  }

 addProcess(process: any) {
   mops.push(process);
 }
  addSubProcess(subProcess: any) {
   products.push(subProcess);
 }

}


