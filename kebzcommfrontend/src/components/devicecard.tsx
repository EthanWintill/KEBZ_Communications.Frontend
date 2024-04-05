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
    <div className="device-card">
      <h3>{device.manufacturer} {device.model}</h3>
      <p>Phone Number: {device.phoneNumber}</p>
      <p>IMEI: {device.imei}</p>
    </div>
  );
}

export default DeviceCard;
