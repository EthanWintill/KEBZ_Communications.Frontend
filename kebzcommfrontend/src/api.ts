// src/api.ts

export interface Device {
    id: number;
    manufacturer: string;
    model: string;
    phoneNumber: string;
    imei: string;
  }
  
  export interface Plan {
    id: number;
    name: string;
    price: number;
    description: string;
    deviceLimit: number;
    textLimit: number;
    minuteLimit: number;
    dataLimit: number;
  }
  
  export const getDevicesFromPlan = async (planId: number): Promise<Device[]> => {
    // Mock API call to fetch devices for a given plan
    // Replace this with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Assuming the devices are filtered based on planId
        const devices = [
          { id: 1, manufacturer: 'Apple', model: 'iPhone 12', phoneNumber: '+1234567890', imei: '123456789012345' },
          { id: 2, manufacturer: 'Samsung', model: 'Galaxy S21', phoneNumber: '+1987654321', imei: '987654321098765' },
        ];
        resolve(devices);
      }, 1000); // Simulating delay
    });
  };
  
  export const getPlansFromUser = async (): Promise<Plan[]> => {
    // Mock API call to fetch plans for the current user
    // Replace this with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dummy plans for the current user
        const plans = [
          { id: 1, name: 'Basic Plan', price: 29.99, description: 'Basic plan with limited features', deviceLimit: 1, textLimit: 1000, minuteLimit: 500, dataLimit: 5 },
          { id: 2, name: 'Standard Plan', price: 49.99, description: 'Standard plan with more features', deviceLimit: 2, textLimit: 2000, minuteLimit: 1000, dataLimit: 10 },
        ];
        resolve(plans);
      }, 1000); // Simulating delay
    });
  };
  