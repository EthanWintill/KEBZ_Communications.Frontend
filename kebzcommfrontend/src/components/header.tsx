// src/components/Header.js
//TODO add logout link
import React from 'react';
import { Link } from 'react-router-dom';

function logout(){
  //TODO
  // FILL THIS OUT
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
            <Link className="nav-link" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  );
}

export default Header;
