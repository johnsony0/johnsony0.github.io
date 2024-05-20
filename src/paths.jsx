import React from 'react';
import { Router, Routes, Route } from 'react-router-dom'; // Changed from BrowserRouter to Routes
import Home from './components/Home/home-view';
import About from './components/About/about-view';

function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Paths;