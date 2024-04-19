// DeviceCard.tsx

import React from 'react';
import { removeDevice } from '../api';

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

interface DeviceCardButtonSwitchProps {
  device: Device;
  onSelected: (device: Device) => void;
  isSelected?: boolean; // Add this line
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
    <div className="col-md-4">
      <div className="card">
        <div className="card-header"> <h4>{device.manufacturer} {device.model}</h4></div>
        <div className="card-body">
          <p>Phone Number: {device.phoneNumber}</p>
          <p>IMEI: {device.imei}</p>
          <button onClick={() => {
            removeDevice(device.deviceId);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }} className="btn btn-danger">Remove Device</button>
          <div style={{ margin: '20px' }}></div>
        </div>
      </div>
    </div>

  );
}

export const DeviceCardButtonsSwitch: React.FC<DeviceCardButtonSwitchProps> = ({ device, onSelected, isSelected }) => {

  return (
    <div className={`col-md-4`} onClick={() => { onSelected(device) }}>
      <div className={`card ${isSelected ? 'bg-info' : ''}`}>
        <div className="card-header"> <h4>{device.manufacturer} {device.model}</h4></div>
        <div className="card-body">
          <p>Phone Number: {device.phoneNumber}</p>
          <p>IMEI: {device.imei}</p>
          <p><i>Click to select</i></p>
          <div style={{ margin: '20px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
