import React from 'react';

const DeviceCardGallery: React.FC<{ device: any }> = ({ device }) => {
    return (
        <div className="card" style={{ width: '240px', minHeight: '400px', margin: '10px', flex: '0 0 auto', display: 'flex', flexDirection: 'column' }}>
            <img src={device.imageUrl} className="card-img-top" alt={device.model} style={{ width: '100%', height: '240px', objectFit: 'contain' }} />
            <div className="card-body" style={{ flexGrow: 1 }}>
                <h5 className="card-title">{device.model}</h5>
                <p className="card-text">{device.manufacturer}</p>
                <p className="card-text"><small className="text-muted">{device.type}</small></p>
            </div>
        </div>
    );
};

export default DeviceCardGallery;
