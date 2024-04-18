// EditPlanPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams to access URL parameters
import { getUserDevices, getUserPlanDevices, switchNumbers } from '../api';
import {PhonePlanCardExpanded} from '../components/plancard';
import { DeviceCardButtonsSwitch } from '../components/devicecard';
import { PhonePlan, Device } from '../types';
import { Link } from 'react-router-dom';

const SwitchPhoneNumbersPage: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  let { state } = useLocation();
  const superplan = state.state.superplan;
  const currentUserId = sessionStorage.getItem('userId');
  let selectedDevice: Device | null = null;

const handleSelected = (device: Device) => {
  console.log(device + ' selected!');
  if (selectedDevice === null) {
    selectedDevice = device;
  } else {
    switchNumbers(selectedDevice, device);
    selectedDevice = null;
  }

}

  useEffect(() => {
    const fetchData = async () => {
      // Fetch devices associated with the selected plan
      const fetchedDevices = await getUserDevices(currentUserId);
      setDevices(fetchedDevices);
    };

    fetchData();
  }, []);

  if (!superplan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-plan-page">
      <h2>Switch Phone Numbers</h2>
      {devices.map((device) => (
        <div className = "border p-3">
          <DeviceCardButtonsSwitch key={device.deviceId} device={device} onSelected={handleSelected}/>
        </div>
        //TODO
        // ADD REMOVE DEVICE BUTTON
        // ADD ADD DEVICE BUTTON
        // ADD SWITCH NUMBERS FUNCTIONALITY
      ))}
      <div style={{margin: '20px'}}></div>
    </div>
  );
};

export default SwitchPhoneNumbersPage;