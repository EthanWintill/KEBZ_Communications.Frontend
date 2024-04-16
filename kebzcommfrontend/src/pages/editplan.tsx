// EditPlanPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { getPlanById, getUserPlanDevices} from '../api';
import {PhonePlanCardExpanded} from '../components/plancard';
import DeviceCardButtons from '../components/devicecard';
import { PhonePlan, Device } from '../types';
import { Link } from 'react-router-dom';

const EditPlanPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>(); // Get the planId parameter from the URL
  const [plan, setPlan] = useState<PhonePlan | null>(null);
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the selected plan by its ID
      const fetchedPlan = await getPlanById(planId);
      setPlan(fetchedPlan || null);

      // Fetch devices associated with the selected plan
      const fetchedDevices = await getUserPlanDevices(planId, sessionStorage.getItem('userId'));
      setDevices(fetchedDevices);
    };

    fetchData();
  }, [planId]);

  if (!plan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-plan-page">
      <h2>Edit Plan</h2>
      <PhonePlanCardExpanded plan={plan} onClick={()=>{}}/> {/* Display the selected plan */}
      <h3>Associated Devices</h3>
      {devices.map((device) => (
        <DeviceCardButtons key={device.id} device={device} /> // Display associated devices
        //TODO
        // ADD REMOVE DEVICE BUTTON
        // ADD ADD DEVICE BUTTON
        // ADD SWITCH NUMBERS FUNCTIONALITY
      ))}
    <Link to="./adddevicepage" className="btn btn-primary">Add Device</Link>
    </div>
  );
};

export default EditPlanPage;
