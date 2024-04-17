// DeviceCard.tsx

import React from 'react';
import {removeDevice} from '../api';

interface Device {
  deviceId: string;
  manufacturer: string;
  model: string;
  phoneNumber: string;
  imei: string;
}

interface DeviceCardProps {
  device: Device;
}

interface DeviceCardButtonProps {
  device: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  return (
    <>
      <td></td>
      <td></td>
      <th>{device.manufacturer} </th>
      <th>{device.model}</th>
      <td>{device.phoneNumber}</td>
      <td>{device.imei}</td>
      <td></td>
      <td></td>
    </>
  );
}

export const DeviceCardButtons: React.FC<DeviceCardButtonProps> = ({ device }) => {

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h4>{device.manufacturer} {device.model}</h4>
        <p>Phone Number2: {device.deviceId}</p>
        <p>Phone Number: {device.phoneNumber}</p>
        <p>IMEI: {device.imei}</p>
        <button onClick={() => removeDevice(device.deviceId)} className="btn btn-danger">Remove Device</button>
        <div style = {{margin: '20px'}}></div>
      </div>
    </div>
  );
}

export default DeviceCard;
