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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
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
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token',data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="userName" name="userName" value={formData.userName} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button className="btn-primary" type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
