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
    <div>
      <h2>Register</h2>
      {/* TODO:
      move this into a seperate component */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Register;
