import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import LoginForm from './component/LoginForm';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { auth, signOut } from './firebase/Firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => setShowLoginForm(true);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  const handleCloseLoginForm = () => setShowLoginForm(false);

  const handleLoginSuccess = (user) => {
    setUser(user);
    setShowLoginForm(false);
  };

  return (
    <Router>
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />

      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} onSuccess={handleLoginSuccess} />}
      
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
};

export default App;
