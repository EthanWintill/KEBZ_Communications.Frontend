export interface PhonePlan {
    planId: number;
    PlanName: string;
    Price: number;
    PlanDescription: string;
    DeviceLimit: number;
    TextLimit: number;
    MinuteLimit: number;
    DataLimit: number;
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
  