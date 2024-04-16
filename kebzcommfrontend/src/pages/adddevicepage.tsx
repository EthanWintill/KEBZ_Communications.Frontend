import React from 'react';
import { Link } from 'react-router-dom';
import DeviceForm from '../components/deviceform';
import { Device } from '../types'

const CreateDevicePage: React.FC = () => {
    const handleSubmit = (formData: any) => {
      
    };
  
    return (
      <div className="editplan article container mt-5">
        <h2 text-left mt-4>Add New Device</h2>
            <DeviceForm onSubmit={handleSubmit} />
      </div>
    );
  }

export default CreateDevicePage;