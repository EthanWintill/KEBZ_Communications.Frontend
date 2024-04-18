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
  const [popup, setpopup] = useState<string | null>(null);  // State for storing server popup messages


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    const response = await addDevice(JSON.stringify(formData));
    console.log(response)
    if (response['response']) {
      setpopup(response['response']['data']);
    }else{
      setpopup('device added successfully');
    }


    onSubmit(formData);
    setTimeout(() => {
      window.location.href = '/home';
    }, 1000);
  };

  const manufacturerModels: Record<string, string[]> = {
    "Apple": [
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone 12",
      "iPhone 12 mini",
      "iPhone SE (2nd generation)",
      "iPhone 11",
      "iPhone XR",
      "iPhone XS",
      "iPhone X",
      "iPhone 8",
      "iPhone 7",
      "iPhone SE (1st generation)",
      "iPhone 6",
      "iPhone 5s",
      "iPhone 5c",
      "iPhone 5",
      "iPhone 4s",
      "iPhone 4",
      "iPhone 3GS",
      "iPhone 3G",
      "iPhone (1st generation)"
    ],
    "Samsung": [
      "Galaxy S21",
      "Galaxy S20 FE",
      "Galaxy S20",
      "Galaxy S10",
      "Galaxy S10e",
      "Galaxy S9",
      "Galaxy S8",
      "Galaxy S7",
      "Galaxy S6",
      "Galaxy S5",
      "Galaxy Note 20",
      "Galaxy Note 10",
      "Galaxy Note 9",
      "Galaxy Note 8",
      "Galaxy Note 5",
      "Galaxy Note 4",
      "Galaxy Z Flip",
      "Galaxy Z Fold",
      "Galaxy Fold 2",
    ],
    "Sony": [
      "Xperia 10 III",
      "Xperia 5 II",
      "Xperia 10 II",
      "Xperia 1",
      "Xperia 5",
      "Xperia 10",
      "Xperia XZ3",
      "Xperia XZ2",
      "Xperia XZ1",
      "Xperia XZ Premium",
      "Xperia XZ",
      "Xperia XA2",
      "Xperia XA1"
    ],
    "Motorola": [
      "Moto G Power (2022)",
      "Moto G Stylus (2022)",
      "Moto G Pure",
      "Moto G30",
      "Moto G10",
      "Moto E7i Power",
      "Moto E40",
      "Moto E30",
      "Moto E20",
      "Moto E",
      "Moto G9 Power",
      "Moto G9 Play",
      "Moto G8 Power",
      "Moto G8",
      "Moto G7 Power",
      "Moto G7 Play",
      "Moto G7",
      "Moto G6",
      "Moto G5S Plus",
      "Moto G5 Plus"
    ],
    "LG": [
      "LG Velvet",
      "LG Q92",
      "LG Q91",
      "LG Q70",
      "LG Q60",
      "LG Q Stylus",
      "LG K92",
      "LG K61",
      "LG K51S",
      "LG K41S",
      "LG K42",
      "LG K40S",
      "LG K40",
      "LG K30 (2019)",
      "LG K20 (2019)",
      "LG K11",
      "LG K10 (2018)",
      "LG K9",
      "LG K8 (2018)",
      "LG K7 (2017)"
    ],
    "Nokia": [
      "Nokia G50",
      "Nokia G50 5G",
      "Nokia X10",
      "Nokia X20",
      "Nokia 8.3 5G",
      "Nokia 5.4",
      "Nokia 3.4",
      "Nokia 2.4",
      "Nokia 8.1",
      "Nokia 7.2",
      "Nokia 6.2",
      "Nokia 5.3",
      "Nokia 4.2",
      "Nokia 3.2",
      "Nokia 2.3",
      "Nokia 1.3",
      "Nokia 1 Plus",
      "Nokia 1"
    ],
  }

  return (
    <form onSubmit={handleSubmit}>
      {popup && <div className={`alert ${popup !== 'device added successfully' ? 'alert-danger' : 'alert-success'}`} role="alert">{popup}</div>} {/* Display the popup message if it exists */}
      <div>
        <label htmlFor="manufacturer">Manufacturer:</label>
        <select id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange}>
          <option value = "">Select Manufacturer</option>
          {Object.keys(manufacturerModels).map(manufacturer => (
            <option key={manufacturer} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <select id="model" name="model" value={formData.model} onChange={handleChange}>
          <option value = "">Select Model</option>
          {formData.manufacturer && manufacturerModels[formData.manufacturer]?.map(model => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
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
