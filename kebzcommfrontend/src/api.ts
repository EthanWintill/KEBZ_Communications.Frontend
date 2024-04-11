

import { promises } from 'dns';
import { PhonePlan, Device, User } from './types'; // Import Plan interface


// Define a list of predefined plans
const plans: PhonePlan[] = [
  // Add more plans as needed
];

// Mock API function to fetch a plan by its ID
export const getPlanById = async (planId: number): Promise<PhonePlan | undefined> => {
  // Simulate delay to mimic network request
  await new Promise(resolve => setTimeout(resolve, 500));

  // Find the plan with the matching ID
  const plan = plans.find(p => p.planId === planId);

  // Return the found plan, or undefined if not found
  return plan;
};
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
  
  export const getPlansFromUser = async (): Promise<any> => {
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
  
  // Mock API function to fetch all plans
export const getAllPlans = async (): Promise<any> => {
    // Simulating delay
    try {
      const response = await fetch('https://localhost:5001/api/plan');
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  // Mock API function to assign a plan to the current user
  export const assignPlanToUser = async (currentUser: string, planId: number): Promise<void> => {
    // Simulating delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Log the plan assigned to the user
    console.log(`Plan assigned to user ${currentUser}: ${planId}`);
  };
  

  export const getUserById = async (userId: number): Promise<User> =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = {id: 0, username: 'test', email: 'test@test.com', firstname: 'testy', lastname: 'tester'};
            resolve(user);
        }, 1000);
    });
  };