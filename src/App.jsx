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

import MediaBias from './components/Projects/Media-Bias/media-bias-view';
import ToDo from './components/Projects/To-Do/to-do-view';
import StardewQuiz from './components/Projects/Stardew-Quiz/stardew-quiz-view';
import MTAOpenData from './components/Projects/MTA-Open-Data/mta-open-data-view'

import ClarityNavbar from './components/Clarity/clarity-navbar';
import ClarityFooter from './components/Clarity/clarity-footer';
import Clarity from './components/Clarity/clarity-view';
import ClarityFAQ from './components/Clarity/FAQ/faq-view';
import ClarityFB from './components/Clarity/FB/fb-view';
import ClarityX from './components/Clarity/X/x-view';
import ClarityYT from './components/Clarity/YT/yt-view';


const show = (Component) => {
  return(
    <>
      <NavBar/>
      <Component/>
      <Footer/>
    </>
  )
}

const clarityTab = (component) => {
  return (
    <>
      <ClarityNavbar />
      {component}
      <ClarityFooter />
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
          <Route path="/projects/media-bias" element={show(MediaBias)} />
          <Route path="/projects/todo" element={<ToDo/>}/>
          <Route path="/projects/mta-open-data" element={<MTAOpenData/>}/>
        <Route path="/personality-quiz/stardew" element={<StardewQuiz />} />
        <Route path="/resume" element={show(Resume)} />
        <Route path="/clarity" element={clarityTab(<Clarity/>)}/>
          <Route path="clarity/fb" element={clarityTab(<ClarityFB />)} />
          <Route path="clarity/x" element={clarityTab(<ClarityX />)} />
          <Route path="clarity/yt" element={clarityTab(<ClarityYT />)} />
          <Route path="clarity/faq" element={clarityTab(<ClarityFAQ />)} />
        <Route path="/contact" element={show(Contact)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;