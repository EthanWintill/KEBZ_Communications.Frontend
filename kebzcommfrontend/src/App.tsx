import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homepage';
import EditPlanPage from './pages/editplan';
import AddDevicePage from './pages/adddevicepage';
import AccountPage from './pages/accountpage'
import Register from './pages/registerpage';
import PrivateRoutes from './components/protectedRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/account' Component={AccountPage} />
            <Route path="/home" Component={HomePage} />
            <Route path="/editplan/planId/adddevicepage" Component={AddDevicePage} />
            <Route path="/editplan" Component={EditPlanPage} />
          </Route>
          <Route path="/" Component={LoginPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path='/register' Component={Register} />
        </Routes>
        {/* Footer */}
      </div>
    </Router>

  );
}

export default App;
