// src/pages/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface PhonePlan {
  id: number;
  name: string;
}

const HomePage: React.FC = () => {
  const [phonePlans, setPhonePlans] = useState<PhonePlan[]>([]);

  useEffect(() => {
    // Fetch user's phone plans from the API
    axios.get<PhonePlan[]>('/api/phone-plans')
      .then(response => {
        setPhonePlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching phone plans:', error);
      });
  }, []);

  return (
    <div className="home-page">
      <h2>Welcome to KEBZ Communications</h2>
      <h3>Your Phone Plans:</h3>
      <ul>
        {phonePlans.map(plan => (
          <li key={plan.id}>
            <Link to={`/plan/${plan.id}`}>{plan.name}</Link>
          </li>
        ))}
      </ul>
      <p>Manage your plans <Link to="/account">here</Link></p>
      <p>Add a new plan <Link to="/add-plan">here</Link></p>
    </div>
  );
}

export default HomePage;
