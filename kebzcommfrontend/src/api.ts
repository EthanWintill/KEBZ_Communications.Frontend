

import { promises } from 'dns';
import { PhonePlan, Device, User, UserPlan } from './types'; // Import Plan interface
import axios from 'axios';
import { MyFormData } from './types';

// Function to register a user
export const registerUser = async (formData: MyFormData): Promise<User | null> => {
  try {
    // Making a POST request to the authentication endpoint to register a user
    const response = await http.post<User>('/authentication', formData);
    console.log('Registration successful:', response.data);
    return response.data;  // Returning the response data which includes user details
  } catch (error: any) {
    console.error('Registration failed:', error.response?.data);
    // Rethrowing the error with a customized message extracted from the error response
    const errorMessage = error.response?.data?.message || error.message || "Registration failed due to unknown error";
    throw new Error(errorMessage);
  }
};

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

export const getPlanById = async (planId: string | undefined): Promise<PhonePlan> => {
  try {
    const response = await http.get<PhonePlan>('/plan/' + planId);
    return response.data;
  } catch (error) {
    throw new Error;
  }
};



export const getUserById = async (userId: string | null): Promise<User | null> => {
  try {
    const response = await http.get<User>('/user/' + userId);
    return response.data
  } catch (error) {
    throw new Error;
  }
};


export const getUserPlans = async (userId: string | null): Promise<any> => {
  try {
    const response = await http.get<PhonePlan[]>(`/user/${userId}/userplan`);
    const userplans =  response.data;

    const planPromises = userplans.map((userPlan) => getPlanById(userPlan.planId));
    const plans = await Promise.all(planPromises);

    return plans;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const getUserPlanDevices = async (userPlanId: string | undefined, userId: string | null): Promise<Device[]> => {
  return [];
}

export const addUserPlan = async (userId: string | null, planId: string | undefined): Promise<void> => {

  const currentDate = new Date();
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(currentDate.getMonth() + 6);

  try {
    const response = await http.post(`/user/${userId}/userplan`,
      {
        userId: userId,
        planId: planId,
        startDate: currentDate.toJSON().slice(0, 10),
        endDate: sixMonthsFromNow.toJSON().slice(0, 10)
      })
      console.log(response);
  } catch (error) {
    console.log(error)
    throw new Error();
  }
}

export const updateUser = async (userId: string | null, /*other args here */): Promise<void> => {

}

export const removeDevice = async (deviceId: string | undefined): Promise<void> => {

}
export const addDevice = async (deviceId: string | undefined, device: Device): Promise<void> => {

}
export const removeUserPlan = async (userId: string | null, planId: string | undefined): Promise<void> => {

}
export const switchNumbers = async (device1Id: string | undefined, device2Id: string | undefined): Promise<void> => {

}

