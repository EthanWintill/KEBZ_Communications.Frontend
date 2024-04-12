// src/pages/LoginPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/loginform';

const LoginPage: React.FC = () => {
  const handleLogin = (formData: any) => {
    // Add login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page article container">
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
  );
}

export default LoginPage;
