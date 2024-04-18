import React from 'react';

const DeviceCard: React.FC<{ device: any }> = ({ device }) => {
    return (
        <div className="card">
            <img src={device.imageUrl} className="card-img-top" alt={device.model} />
            <div className="card-body">
                <h5 className="card-title">{device.model}</h5>
                <p className="card-text">{device.manufacturer}</p>
                <p className="card-text"><small className="text-muted">{device.type}</small></p>
            </div>
        </div>
    );
};

export default DeviceCard;
