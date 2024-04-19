

import { promises } from 'dns';
import { PhonePlan, Device, User, UserPlan, Superplan } from './types'; // Import Plan interface
import axios from 'axios';
import { MyFormData } from './types';
import { logout } from './components/header';

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
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
});

const check401 = (error: any) => {
  if(error.response.status === 401)
    logout();
}


//GET ALL
export const getAllPlans = async (): Promise<PhonePlan[]> => {
  try {
    const response = await http.get<Array<PhonePlan>>('/plan');
    return response.data; // Return the data from the response
  } catch (error) {
    check401(error);
    throw new Error('Failed to fetch plans'); // Throw an error if the request fails
  }
};

export const getAllDevices = async (): Promise<Device[]> => {
  try {
    const response = await http.get<Array<Device>>('/device');
    return response.data; // Return the data from the response
  } catch (error) {
    check401(error);
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



export const getUserById = async (userId: string | null): Promise<User | any> => {
  try {
    const response = await http.get<User>('/user/' + userId);
    return response.data
  } catch (error: any) {
    check401(error);
    return error
  }
};


export const getUserPlans = async (userId: string | null): Promise<any> => {
  try {
    const response = await http.get<UserPlan[]>(`/user/${userId}/userplan`);
    const userplans = response.data;

    const plans = await getAllPlans();

    const superplans: Superplan[] = userplans.map(userplan => {
      const associatedPlan = plans.find(plan => plan.planId === userplan.planId);
      return {
        planObj: associatedPlan,
        associatedUserPlanID: userplan.userPlanId
      };
    });


    return superplans;
  } catch (error) {
    check401(error);
    throw new Error();
  }
}

export const getUserPlansAsUserPlans = async (userId: string | null) : Promise<UserPlan[]> => {
  try {
    const response = await http.get<UserPlan[]>(`/user/${userId}/userplan`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const getUserDevices = async (userId: string | null): Promise<Device[]> => {
  if (!userId) {
    throw new Error('Invalid user ID');
  }
  try {
    const response = await http.get<Array<Device>>(`/device/${userId}/device`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export const getUserPlanDevices = async (userPlanId: string | undefined, userId: string | null): Promise<Device[]> => {
  try {
    const response = await http.get(`/device/${userId}/${userPlanId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    check401(error);
    throw new Error();
  }
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

export const updateUser = async (editedUser: User): Promise<void> => {
  try {
    const response = await http.put(`/user/${editedUser.id}`, editedUser);
    console.log(response);
  } catch (error) {
    check401(error);
    throw new Error();
  }
}

export const removeDevice = async (deviceId: string | undefined): Promise<void> => {
  try {
    const response = http.delete(`/device/${deviceId}`)
    console.log(deviceId);
  } catch (error) {
    check401(error);
    throw new Error();
  }
}
export const addDevice = async ( devicedata: any): Promise<void | any> => {
  try {
    const response = await http.post(`/device`, devicedata);
    return response.status;
  } catch (error: any) {
    return error;
  }
}

export const removeUserPlan = async (userId: string | null, planId: string | undefined): Promise<void> => {
  try {
    const response = await http.delete(`/user/${userId}/userplan/${planId}`);
    return response.data;
  } catch (error) {
    check401(error);
    throw new Error()
  }
}
export const switchNumbers = async (device1: Device, device2: Device): Promise<void> => {
  if (!device1 || !device2) {
    throw new Error('Invalid device');
  }
  try {
    const newDevice2Number = device1.phoneNumber;
    const newDevice1Number = device2.phoneNumber;
    const randomNumber = Math.floor(Math.random() * 1000000000).toString();

    device1.phoneNumber = randomNumber;
    device2.phoneNumber = newDevice2Number;

    const device1PutRes = await http.put(`/device/${device1?.deviceId}`, device1);
    const device2PutRes = await http.put(`/device/${device2?.deviceId}`, device2);

    device1.phoneNumber = newDevice1Number;
    const device1PutRes2 = await http.put(`/device/${device1?.deviceId}`, device1);

    console.log(device1PutRes);
  } catch (error) {
    check401(error);
    throw new Error();
  }
}

