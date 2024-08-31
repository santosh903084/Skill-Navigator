import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/AdminLogin';  // Import AdminLogin page
import AdminDashboard from './pages/AdminDashboard'; // Import the AdminDashboard
import ForgotPassword from './pages/ForgotPassword';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Route for AdminLogin */}
        {/* You can add a route for the admin dashboard here */}
       <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Placeholder for the Admin Dashboard */}
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the route */}
      </Routes>
    </Router>
  );
};

export default App;
