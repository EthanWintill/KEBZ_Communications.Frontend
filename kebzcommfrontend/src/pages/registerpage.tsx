import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    phoneNumber: ''
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO:
    // move this into an api call in api.ts
    try {
      const response = await axios.post('https://localhost:5001/api/authentication', formData);
      console.log('Registration successful:', response.data);
    } catch (error: any) {
      console.error('Registration failed:', error.response.data);
      setError(error.response.data.message || 'Registration failed.');
    }
    // TODO:
    // Redirect or show success message
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {/* TODO:
      move this into a seperate component */}
      <form onSubmit={handleSubmit}> 
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
      </form>
    </div>
  );
};

export default Register;
