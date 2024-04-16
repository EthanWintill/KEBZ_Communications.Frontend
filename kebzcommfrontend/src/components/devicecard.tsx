// DeviceCard.tsx

import React from 'react';

interface Device {
  id: string;
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
  onRemove: () => void; // Function to handle device removal
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

const DeviceCardButtons: React.FC<DeviceCardButtonProps> = ({ device, onRemove }) => {

  const handleRemove = () => {
    onRemove();
  };

  return (
    <>
      <td></td>
      <td></td>
      <th>{device.manufacturer} </th>
      <th>{device.model}</th>
      <td>{device.phoneNumber}</td>
      <td>{device.imei}</td>
      <button onClick={handleRemove} className="btn btn-danger">Remove Device</button>
      <td></td>
      <td></td>
    </>
  );
}

export default DeviceCard;
