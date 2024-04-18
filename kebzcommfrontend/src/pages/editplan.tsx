// EditPlanPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams to access URL parameters
import { getPlanById, getUserPlanDevices, removeDevice} from '../api';
import {PhonePlanCardExpanded} from '../components/plancard';
import {DeviceCardButtons} from '../components/devicecard';
import { PhonePlan, Device } from '../types';
import { Link } from 'react-router-dom';

const EditPlanPage: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [deviceCount, setDeviceCount] = useState<number>(0);
  let { state } = useLocation();
  const superplan = state.state.superplan;

  useEffect(() => {
    const fetchData = async () => {


      // Fetch devices associated with the selected plan
      const fetchedDevices = await getUserPlanDevices(superplan.associatedUserPlanID, sessionStorage.getItem('userId'));
      setDevices(fetchedDevices);
      setDeviceCount(fetchedDevices.length);
    };

    fetchData();
  }, []);

  if (!superplan) {
    return <div>Loading...</div>;
  }

  const atLimit = deviceCount < superplan.planObj.deviceLimit;

  return (
    <div className="edit-plan-page">
      <h2>Edit Plan</h2>
      <PhonePlanCardExpanded superplan={superplan} onClick={()=>{}}/> {/* Display the selected plan */}
      <h3>Associated Devices</h3>
      {devices.map((device) => (
        <div className = "border p-3">
          <DeviceCardButtons device={device} />
        </div>
        //TODO
        // ADD SWITCH NUMBERS FUNCTIONALITY
      ))}
      <div style={{margin: '20px'}}></div>
      <Link 
            to={atLimit ? "./adddevicepage" : "/"} 
            state={{
              state: {superplan}
            }}
            className={`btn ${atLimit ? "btn-primary" : "btn-secondary"}`} >
            {atLimit ? "Add Device" : "Maximum Devices Reached"}
        </Link>
      <Link to={"./switchphonenumbers"} className="btn btn-primary" state={{state: {superplan}}}>Switch Phone Numbers</Link>
    </div>
  );
};

export default EditPlanPage;