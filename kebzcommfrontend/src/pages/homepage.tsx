// src/pages/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhonePlanCard from '../components/plancard';
import DeviceCard from '../components/devicecard';

const phonePlans = [
    { id: 1, name: 'Basic Plan', price: 29.99, description: 'Basic plan with limited features', deviceLimit: 1, textLimit: 1000, minuteLimit: 500, dataLimit: 5 },
    { id: 2, name: 'Standard Plan', price: 49.99, description: 'Standard plan with more features', deviceLimit: 2, textLimit: 2000, minuteLimit: 1000, dataLimit: 10 },
    // Add more phone plans as needed
];
const devices = [
    { id: 1, manufacturer: 'Apple', model: 'iPhone 12', phoneNumber: '+1234567890', imei: '123456789012345' },
    { id: 2, manufacturer: 'Samsung', model: 'Galaxy S21', phoneNumber: '+1987654321', imei: '987654321098765' },
    // Add more devices as needed
  ];
  

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h2>Phone Plans</h2>
            {phonePlans.map(plan => (
                <PhonePlanCard key={plan.id} plan={plan} />
            ))}
            <h2>Devices</h2>
            {devices.map(device => (
                <DeviceCard key={device.id} device={device} />
            ))}

        </div>
    );
}


export default HomePage;
