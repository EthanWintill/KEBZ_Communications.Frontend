import React, { useState } from 'react';
import DeviceCard from './devicecardgallery'; // Make sure the path is correct
import { BestDevice } from '../types';  // Adjust path as needed

const DeviceGallery: React.FC = () => {
    const initialDevices: BestDevice[] = [
        {
            deviceId: '1',
            model: 'Apple iPhone 15',
            manufacturer: 'Apple',
            imageUrl: '/images/iphone15.jpg'
        },
        {
            deviceId: '2',
            model: 'Samsung Galaxy S21',
            manufacturer: 'Samsung',
            imageUrl: '/images/galaxys21.jpg'
        },
        {
            deviceId: '3',
            model: 'Xperia 10 III',
            manufacturer: 'Sony',
            imageUrl: '/images/xperia10iii.jpg'
        },
        {
            deviceId: '4',
            model: 'Motorola Moto G Power (2022)',
            manufacturer: 'Motorola',
            imageUrl: '/images/motogpower2022.jpg'
        },
        {
            deviceId: '5',
            model: 'LG Velvet',
            manufacturer: 'LG',
            imageUrl: '/images/lgvelvet.jpg'
        },
        {
            deviceId: '6',
            model: 'Nokia G50',
            manufacturer: 'Nokia',
            imageUrl: '/images/nokiag50.jpg'
        }
    ];

    const [devices, setDevices] = useState<BestDevice[]>(initialDevices);

    return (
        <div className="device-gallery container">
            <h2>View our best devices.</h2>
            <div className="row">
                {devices.map(device => (
                    <div key={device.deviceId} className="col-md-4 mb-3">
                        <DeviceCard device={device} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeviceGallery;
