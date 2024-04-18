import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kebz-logo.png'; // Make sure to place your logo in the src/assets directory

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // State to manage the button text dynamically
  const [buttonText, setButtonText] = useState("Get Started");
  
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    // Check if token is not null and not an empty string
    if (token) {
      setButtonText("View Your Plans");
    } else {
      setButtonText("Get Started"); // Ensure button text is set correctly on logout
    }
  }, []);

  const handleButtonClick = () => {
    // Navigate based on whether the user is logged in or not
    if (buttonText === "View Your Plans") {
      navigate('/home'); // Redirects to the Home page if logged in
    } else {
      navigate('/register'); // Redirects to the Register page if not logged in
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 200px)' }}>
      <div className="text-center">
        <img src={logo} alt="KEBZ Communications Logo" className="mb-4" style={{ maxWidth: '200px' }} />
        <h1>Welcome to KEBZ Communications</h1>
        <p className="lead">Connecting You to the World, Faster.</p>
        <button onClick={handleButtonClick} className="btn btn-primary btn-lg">{buttonText}</button>
      </div>
    </div>
  );
};

export default LandingPage;
