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

  const [error, setError] = useState<string | null>(null);  // State for storing server error messages


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
      const errMsg = error.response?.data?.message || 'Registration failed. Username or Email may already exist. Password must include at least 8 characters and a number';
      setError(errMsg);  // Set the error state to the error message received from the server or a default message
      onError(errMsg);  // Call the onError prop function with the error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center">
      <div className="col-md-6">
        {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Display the error message if it exists */}

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
