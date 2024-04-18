
import React from 'react';
import RegisterForm from '../components/registerform';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const handleSuccess = () => {
    console.log('Registration successful! Redirecting...');
  };

  const handleError = (message: string) => {
    alert(message);  // Replace this with more sophisticated error handling logic if necessary
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <RegisterForm onSuccess={handleSuccess} onError={handleError} />
      <p>Already have an account? <Link to="/login">Sign in</Link></p>   
    </div>
  );
};

export default RegisterPage;
