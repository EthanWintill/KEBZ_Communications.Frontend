import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homepage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/login" Component={LoginPage} />
          <Route path="/home" Component={HomePage} />
        </Routes>

        {/* Footer */}
      </div>
    </Router>

  );
}

export default App;
