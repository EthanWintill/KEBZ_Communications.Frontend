export interface PhonePlan {
    planId: string;
    planName: string;
    price: number;
    planDescription: string;
    deviceLimit: number;
    textLimit: number;
    minuteLimit: number;
    dataLimit: number;
  }


export interface Device {
    id: string;
    manufacturer: string;
    model: string;
    phoneNumber: string;
    imei: string;
  }
  
  export interface User {
    id: string;
    username: string,
    email: string,
    firstName: string,
    lastName: string,
  }

  export interface UserPlan {
    userPlanId: string;
    userId: string;
    planId: string;
    user?: User | null;
    plan?: PhonePlan | null;
    startDate: Date;
    endDate: Date;
  }
  
  