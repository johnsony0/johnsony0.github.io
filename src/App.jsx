import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer'
import Home from './components/Home/home-view';
import About from './components/About/about-view';
//import Experience from './components/Experience/experience-view';
import Projects from './components/Projects/projects-view';
import Resume from './components/Resume/resume-view';
import Contact from './components/Contact/contact-view'
//https://www.reddit.com/r/webdev/comments/112r7m5/whats_the_best_portfolio_website_youve_ever_seen/?rdt=58318


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/experience" element={<Experience />} />*/}
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;