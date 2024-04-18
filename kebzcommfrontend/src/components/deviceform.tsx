// src/components/deviceform.tsx

import React, { useState } from 'react';
import { Superplan } from '../types';
import { addDevice } from '../api';

interface FormData {
  manufacturer: string;
  model: string;
  phoneNumber: string;
  IMEI: string;
  userId: string;
  userPlanId: string;
}

interface DeviceFormProps {
  superplan: Superplan; 
  onSubmit: (formData: FormData) => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ superplan, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    manufacturer: '',
    model: '',
    phoneNumber: '',
    IMEI: '',
    userId: sessionStorage.getItem('userId')!,
    userPlanId: superplan.associatedUserPlanID
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO:
    // move this into an api call in api.ts
    addDevice(JSON.stringify(formData));

    onSubmit(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="manufacturer">Manufacturer:</label>
        <input type="text" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="IMEI">IMEI:</label>
        <input type="text" id="IMEI" name="IMEI" value={formData.IMEI} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DeviceForm;
