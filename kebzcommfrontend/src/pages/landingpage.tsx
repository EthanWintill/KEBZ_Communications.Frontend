import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kebz-logo.png'; // Make sure to place your logo in the src/assets directory

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register'); // Redirects to the Register page
  };

  return (
    <div className="container text-center mt-5">
      <img src={logo} alt="KEBZ Communications Logo" className="mb-4" style={{ maxWidth: '200px' }} />
      <h1>Welcome to KEBZ Communications</h1>
      <p className="lead">Connecting You to the World, Faster.</p>
      <button onClick={handleGetStartedClick} className="btn btn-primary btn-lg">Get Started</button>
    </div>
  );
};

export default LandingPage;
