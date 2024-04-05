// src/components/LoginForm.tsx

import React, { useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (formData: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
