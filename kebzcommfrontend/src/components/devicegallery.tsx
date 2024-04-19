import React, { useState } from 'react';
import DeviceCard from './devicecardgallery'; 
import { BestDevice } from '../types';  

const DeviceGallery: React.FC = () => {
    const initialDevices: BestDevice[] = [
        {
            deviceId: '1',
            model: 'iPhone 15',
            manufacturer: 'Apple',
            imageUrl: '/publicassets/iphone15.jpg'  
        },
        {
            deviceId: '2',
            model: 'Galaxy S21',
            manufacturer: 'Samsung',
            imageUrl: '/publicassets/galaxy21.jpg'  
        },
        {
            deviceId: '3',
            model: 'Xperia 10 III',
            manufacturer: 'Sony',
            imageUrl: '/publicassets/xperia10iii.jpg'  
        },
        {
            deviceId: '4',
            model: 'Moto G Power (2022)',
            manufacturer: 'Motorola',
            imageUrl: '/publicassets/motogpower2022.jpg'  
        },
        {
            deviceId: '5',
            model: 'LG Velvet',
            manufacturer: 'LG',
            imageUrl: '/publicassets/lgvelvet.jpg'  
        },
        {
            deviceId: '6',
            model: 'Nokia G50',
            manufacturer: 'Nokia',
            imageUrl: '/publicassets/nokiag50.jpg'  
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