import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<ClientDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
