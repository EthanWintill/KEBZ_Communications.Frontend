// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function logout(){
  // Clear user authentication token or data
  localStorage.removeItem('userToken');  // Remove the token from localStorage

  // Redirect to the login page
  window.location.href = '/login';  // Change the location to the login page, causing a page reload
}

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">KEBZ Communications</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account/currentuser">Account</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={logout} style={{ color: 'rgba(255,255,255,.55)' }}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </header>

  );
}

export default Header;
