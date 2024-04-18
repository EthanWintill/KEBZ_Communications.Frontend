import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeviceCardGallery: React.FC<{ device: any }> = ({ device }) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        const token = localStorage.getItem('token'); 

        if (token) {
            navigate('/home');  // Navigate to HomePage if the user is signed in
        } else {
            navigate('/login');  // Navigate to SignIn page if the user is not signed in
        }
    };

    return (
        <div className="card" style={{ width: '240px', minHeight: '400px', margin: '10px', flex: '0 0 auto', cursor: 'pointer' }} onClick={handleCardClick}>
            <img src={device.imageUrl} className="card-img-top" alt={device.model} style={{ width: '100%', height: '240px', objectFit: 'contain' }} />
            <div className="card-body">
                <h5 className="card-title">{device.model}</h5>
                <p className="card-text">{device.manufacturer}</p>
                <p className="card-text"><small className="text-muted">{device.type}</small></p>
            </div>
        </div>
    );
};

export default DeviceCardGallery;
