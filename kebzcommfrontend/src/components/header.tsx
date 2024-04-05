// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>KEBZ Communications</h1>
      </div>
      <nav className="navigation">
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/add-plan">Add Plan</Link></li> */}
          {/* TODO ADD ROUTES */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
