import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeviceCardGallery: React.FC<{ device: any }> = ({ device }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="card" style={{
            width: 'calc(100% - 20px)', // Adjust width to account for padding/margins
            minHeight: '400px',
            margin: '10px auto', // Center card horizontally and add vertical spacing
            cursor: 'pointer'
        }} onClick={handleCardClick}>
            <img src={device.imageUrl} className="card-img-top" alt={device.model}
                style={{ width: '100%', height: '240px', objectFit: 'contain' }} />
            <div className="card-body">
                <h5 className="card-title">{device.model}</h5>
                <p className="card-text">{device.manufacturer}</p>
                <p className="card-text"><small className="text-muted">{device.type}</small></p>
            </div>
        </div>
    );
};


export default DeviceCardGallery;
