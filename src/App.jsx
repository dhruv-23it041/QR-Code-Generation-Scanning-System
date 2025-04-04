// client/src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import QRGenerator from './pages/QRGenerator';
import QRScanner from './pages/QRScanner';
// import History from './pages/History';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Navbar from './pages/Navbar';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<QRGenerator />} />
          {/* <Route path="/scanner" element={isLoggedIn ? <QRScanner /> : <Navigate to="/login" />} />
          <Route path="/history" element={isLoggedIn ? <History /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
