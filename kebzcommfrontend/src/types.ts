export interface PhonePlan {
    id: number;
    name: string;
    price: number;
    description: string;
    deviceLimit: number;
    textLimit: number;
    minuteLimit: number;
    dataLimit: number;
  }


export interface Device {
    id: number;
    manufacturer: string;
    model: string;
    phoneNumber: string;
    imei: string;
  }
  
  