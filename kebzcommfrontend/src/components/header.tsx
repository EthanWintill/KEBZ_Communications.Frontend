// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/kebz-logo.png';

export function logout(){
  // Clear user authentication token or data
  localStorage.removeItem('token');  // Remove the token from localStorage
  sessionStorage.clear();
  
  // Redirect to the login page
  window.location.href = '/login';  // Change the location to the login page, causing a page reload
}

function Header() {
  // Checks if the user is logged in based on the presence of a token in localStorage or sessionStorage
  const isLoggedIn = localStorage.getItem('token') || sessionStorage.getItem('token');

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img src={logo} alt="KEBZ Communications" style={{ height: '30px' }} />
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        {isLoggedIn && <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/account">Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">Your Plans</Link>
          </li>
        </ul>}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>  {/* Locations Link */}
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>  {/* Contact Us Link */}
          </li>
          <li className="nav-item">
              <span className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>|</span>  {/* Separator */}
            </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={isLoggedIn ? logout : () => window.location.href = '/login'} 
                style={{ color: 'rgba(255,255,255,.55)' }}>
              {isLoggedIn ? 'Logout' : 'Sign-In'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>

  );
}

export default Header;
