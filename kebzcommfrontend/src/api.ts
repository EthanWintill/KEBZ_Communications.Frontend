

import { promises } from 'dns';
import { PhonePlan, Device, User, UserPlan } from './types'; // Import Plan interface
import axios from 'axios';


// Define a list of predefined plans
const plans: PhonePlan[] = [
  // Add more plans as needed
];

export const http = axios.create({
  baseURL: 'https://localhost:5001/api',
  headers: {
    'Content-type': 'application/json',
  },
});


//GET ALL
export const getAllPlans = async (): Promise<PhonePlan[]> => {
  try {
    const response = await http.get<Array<PhonePlan>>('/plan');
    return response.data; // Return the data from the response
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch plans'); // Throw an error if the request fails
  }
};

export const getAllDevices = async (): Promise<PhonePlan[]> => {
  try {
    const response = await http.get<Array<PhonePlan>>('/device');
    return response.data; // Return the data from the response
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch devices'); // Throw an error if the request fails
  }
};


//GET BY IDs
//
//

export const getPlanById = async (planId: string = ""): Promise<PhonePlan | undefined> => {
  try {
    const response = await http.get<PhonePlan>('/plan/'+planId);
    return response.data;
  } catch (error) {
    throw new Error;
  }
};



export const getUserById = async (userId: string = ""): Promise<User> => {
  try {
    const response = await http.get<User>('/user/'+userId);
    return response.data;
  } catch (error) {
    throw new Error;
  }
};



//OTHER GET METHODS

export const getDevicesFromUserPlan = async (planId: string  = ""): Promise<Device[]> => {
  try {
    const userplanresponse = await http.get<UserPlan>('/user/USERID/userplan/'+planId);
    const userplan = userplanresponse.data;
    return [];
  } catch (error) {
    throw new Error;
  }
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



// Mock API function to assign a plan to the current user
export const assignPlanToUser = async (currentUser: string, planId: string): Promise<void> => {
  // Simulating delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Log the plan assigned to the user
  console.log(`Plan assigned to user ${currentUser}: ${planId}`);
};

