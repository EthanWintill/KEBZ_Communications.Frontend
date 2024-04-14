
import React from 'react';
import RegisterForm from '../components/registerform';

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
    </div>
  );
};

export default RegisterPage;
