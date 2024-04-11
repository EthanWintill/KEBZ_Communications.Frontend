import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homepage';
import EditPlanPage from './pages/editplan';
import AccountPage from './pages/accountpage'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/editplan/:planId" Component={EditPlanPage} />
          <Route path='/account/:userId' Component={AccountPage} />
        </Routes>

        {/* Footer */}
      </div>
    </Router>

  );
}

export default App;
