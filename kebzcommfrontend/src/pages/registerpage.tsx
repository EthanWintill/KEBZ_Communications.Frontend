import React, { useState } from 'react';
import axios from 'axios';
import { registerUser } from '../api';
import { MyFormData } from '../types';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [formData, setMyFormData] = useState<MyFormData>({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    phoneNumber: ''
  });

  const [success, setSuccess] = useState<string>(''); // State to handle success message
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Hook to redirect user


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Preventing default form submission behavior
    try {
      // Attempt to register user using the API function
      const user = await registerUser(formData);
      console.log('User registered:', user);
      setSuccess('Registration successful! Redirecting...'); // Set success message
      setError(''); // Clear error message
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error: any) {
      // Setting state to display error message
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {/* TODO:
      move this into a seperate component */}
      <form onSubmit={handleSubmit} className="row justify-content-center"> 
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="inputFirstName" className="label-left">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputLastName" className="label-left">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputUserName" className="label-left">Username:</label>
            <input
              type="text"
              className="form-control"
              id="inputUserName"
              placeholder="Username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="label-left">Password:</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="label-left">Email:</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhoneNumber" className="label-left">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="inputPhoneNumber"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
          {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Register;
