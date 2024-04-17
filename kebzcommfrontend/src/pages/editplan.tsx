// EditPlanPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams to access URL parameters
import { getPlanById, getUserPlanDevices} from '../api';
import {PhonePlanCardExpanded} from '../components/plancard';
import DeviceCardButtons from '../components/devicecard';
import { PhonePlan, Device } from '../types';
import { Link } from 'react-router-dom';

const EditPlanPage: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  let { state } = useLocation();
  const superplan = state.state.superplan;

  useEffect(() => {
    const fetchData = async () => {


      // Fetch devices associated with the selected plan
      const fetchedDevices = await getUserPlanDevices(superplan.associatedUserPlanID, sessionStorage.getItem('userId'));
      setDevices(fetchedDevices);
    };

    fetchData();
  }, []);

  if (!superplan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-plan-page">
      <h2>Edit Plan</h2>
      <PhonePlanCardExpanded superplan={superplan} onClick={()=>{}}/> {/* Display the selected plan */}
      <h3>Associated Devices</h3>
      {devices.map((device) => (
        <DeviceCardButtons key={device.id} device={device} /> // Display associated devices
        //TODO
        // ADD REMOVE DEVICE BUTTON
        // ADD ADD DEVICE BUTTON
        // ADD SWITCH NUMBERS FUNCTIONALITY
      ))}
    <Link to="./adddevicepage" state={{
          state: { superplan } // Pass the superplan object as state
        }as any} className="btn btn-primary">Add Device</Link>
    </div>
  );
};
export default EditPlanPage;
