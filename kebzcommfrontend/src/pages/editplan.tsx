// EditPlanPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams to access URL parameters
import { getPlanById, getUserPlanDevices, removeDevice } from '../api';
import { PhonePlanCardExpanded } from '../components/plancard';
import { DeviceCardButtons } from '../components/devicecard';
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
      <h1>Edit Plan</h1>
      <div className="row justify-content-center">

        <PhonePlanCardExpanded superplan={superplan} /> {/* Display the selected plan */}
      </div>
      <div style={{ margin: '20px' }}></div>
      <h3>Associated Devices</h3>
      <div className="container mt-4">
        <div className="row">
          {devices.map((device) => (
            <DeviceCardButtons device={device} />
          ))}
        </div>
        <div style={{ margin: '20px' }} ></div>
        <div className='row justify-content-center'>
          <Link to={"./switchphonenumbers"} className="btn btn-info col-3" state={{ state: { superplan } }}>Switch Phone Numbers</Link>
          <div className="col-5"></div>
          <Link
            to={atLimit ? "./adddevicepage" : "/"}
            state={{
              state: { superplan }
            }}
            className={`btn ${atLimit ? "btn-primary" : "btn-secondary"} col-3`} >
            {atLimit ? "Add Device" : "Maximum Devices Reached"}
          </Link>
        </div>
      </div>
      <div style={{ margin: '20px' }} ></div>


    </div>
  );
};

export default EditPlanPage;