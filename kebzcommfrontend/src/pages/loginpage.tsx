// src/pages/LoginPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/loginform';

const LoginPage: React.FC = () => {
  const handleLogin = (formData: any) => {
    //TODO
    // REDIRECT TO HOME PAGE
    sessionStorage.setItem('userName', formData.userName);
    window.location.href = '/home'
  };

  return (
    <div className="login-page article container mt-5">
      <h2 text-left mt-4>Login</h2>
          <LoginForm onSubmit={handleLogin} />
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>      
    </div>
  );
}

export default LoginPage;
