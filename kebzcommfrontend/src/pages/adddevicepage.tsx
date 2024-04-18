import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DeviceForm from '../components/deviceform';
import { Device } from '../types'

const CreateDevicePage: React.FC = () => {
    const handleSubmit = (formData: any) => {
      
    };
    let { state } = useLocation();
    const superplan = state.state.superplan;

    return (
      <div className="editplan article container mt-5">
        <h2 className="mt-4">Add New Device</h2>
            <DeviceForm onSubmit={handleSubmit} superplan={superplan} />
      </div>
    );
  }

export default CreateDevicePage;