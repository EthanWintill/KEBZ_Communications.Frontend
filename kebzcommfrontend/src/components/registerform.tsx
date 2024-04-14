import React, { useState } from 'react';
import { MyFormData } from '../types';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

export interface RegisterFormProps {  // Ensuring there's an export statement
  onSuccess: () => void;
  onError: (message: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<MyFormData>({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await registerUser(formData);
      console.log('User registered:', user);
      onSuccess();
      navigate('/login');
    } catch (error: any) {
      onError(error.message || 'Registration failed due to an unknown error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center">
      <div className="col-md-6">
        {/* Dynamically creating form fields based on formData state */}
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label htmlFor={`input${key}`} className="label-left">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type={key === "password" ? "password" : key === "email" ? "email" : "text"}
              className="form-control"
              id={`input${key}`}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              name={key}
              value={value}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;  // This also ensures it's a module
