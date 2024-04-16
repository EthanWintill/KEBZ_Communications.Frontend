// src/components/deviceform.tsx

import React, { useState } from 'react';

interface FormData {
  manufacturer: string;
  model: string;
  phoneNumber: string;
  IMEI: string;
  userId: string;
}

interface DeviceFormProps {
  onSubmit: (formData: FormData) => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    manufacturer: '',
    model: '',
    phoneNumber: '',
    IMEI: '',
    userId: sessionStorage.getItem('userId')!
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
    try {
      const response = await fetch('https://localhost:5001/api/device', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok){
        throw new Error('Device creation failed');
      }

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

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
