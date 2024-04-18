// src/components/LoginForm.tsx

import React, { useState } from 'react';

interface FormData {
  userName: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (formData: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);  // State to store the error message


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO:
    // move this into an api call in api.ts
    try {
      const response = await fetch('https://localhost:5001/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok){
        if (response.status === 401 || response.status === 400) {
          setError('Invalid username or password.');  // Set a specific error message
        } else {
          setError('Login failed. Please try again.');
        }
        return;
      }

      const data = await response.json();
      localStorage.setItem('token',data.token);
      sessionStorage.setItem('userId', data.userId);
      onSubmit(formData);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center">
      <div className="col-md-6">
        {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Display the error message if it exists */}
        <div className="form-group">
          <label htmlFor="inputUsernameLogin" className="label-left">Username:</label>
          <input 
            type="userName" 
            className="form-control"
            id="inputUsernameLogin"
            placeholder="Username"
            name="userName" 
            value={formData.userName} 
            onChange={handleChange} 
            required />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordLogin" className="label-left">Password:</label>
          <input 
            type="password"           
            className="form-control"
            id="inputPasswordLogin"
            placeholder="Password"
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
