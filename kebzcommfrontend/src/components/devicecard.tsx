// DeviceCard.tsx

import React from 'react';

interface Device {
  id: number;
  manufacturer: string;
  model: string;
  phoneNumber: string;
  imei: string;
}

interface DeviceCardProps {
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

export default DeviceCard;
