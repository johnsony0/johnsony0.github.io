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

import DraftPredictior from './components/Projects/Draft-Predictor/draft-predictor-view';
import StardewQuiz from './components/Projects/Stardew-Quiz/stardew-quiz-view';


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
          <Route path="/projects/draftpredictor" element={<DraftPredictior />} />
          <Route path="/projects/stardewquiz" element={<StardewQuiz />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;