export interface PhonePlan {
    planId: number;
    planName: string;
    price: number;
    planDescription: string;
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
  
  export interface User {
    id: number;
    username: string,
    email: string,
    firstname: string,
    lastname: string,
  }
  