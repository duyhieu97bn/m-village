import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Building2, MapPin, Search, Home, Building, Phone, Mail, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RoomSearch from './pages/RoomSearch';
import CitizenProgram from './pages/CitizenProgram';
import MemberBrands from './pages/MemberBrands';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tim-phong" element={<RoomSearch />} />
          <Route path="/ve-citizen-program" element={<CitizenProgram />} />
          <Route path="/thuong-hieu-thanh-vien" element={<MemberBrands />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;