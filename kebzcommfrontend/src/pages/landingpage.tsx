import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kebz-logo.png';
import DeviceGallery from '../components/devicegallery'; // Make sure the path is correct

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState("Get Started");

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            setButtonText("View Your Plans");
        }
    }, []);

    const handleButtonClick = () => {
        if (buttonText === "View Your Plans") {
            navigate('/home');
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="landing-page">
            <div className="title-section d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 200px)', width: '100vw', paddingTop: '50px' }}>
                <div className="text-center">
                    <img src={logo} alt="KEBZ Communications Logo" className="mb-4" style={{ maxWidth: '200px' }} />
                    <h1>Welcome to KEBZ Communications</h1>
                    <p className="lead">Connecting You to the World, Faster.</p>
                    <button onClick={handleButtonClick} className="btn btn-primary btn-lg">{buttonText}</button>
                </div>
            </div>
            <div style={{ marginTop: '200px' }}>  {/* Add margin top to push the DeviceGallery down */}
                <DeviceGallery />
            </div>
        </div>
    );
};

export default LandingPage;
