import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import NotFound from './components/notfound';
import Home from './components/Home/home-view';
import About from './components/About/about-view';
//import Experience from './components/Experience/experience-view';
import Projects from './components/Projects/projects-view';
import Resume from './components/Resume/resume-view';
import Contact from './components/Contact/contact-view'

import DraftPredictior from './components/Projects/Draft-Predictor/draft-predictor-view';
import MediaBias from './components/Projects/Media-Bias/media-bias-view';
import ToDo from './components/Projects/To-Do/to-do-view';
import StardewQuiz from './components/Projects/Stardew-Quiz/stardew-quiz-view';

const show = (Component) => {
  return(
    <>
      <NavBar/>
      <Component/>
      <Footer/>
    </>
  )
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={show(Home)} />
        <Route path="/home" element={show(Home)} />
        <Route path="/about" element={show(About)} />
        <Route path="/projects" element={show(Projects)} />
          <Route path="/projects/draftpredictor" element={show(DraftPredictior)} />
          <Route path="/projects/mediabias" element={show(MediaBias)} />
          <Route path="/projects/todo" element={<ToDo/>}/>
        <Route path="/personality-quiz/stardew" element={<StardewQuiz />} />
        <Route path="/resume" element={show(Resume)} />
        <Route path="/contact" element={show(Contact)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;