import React from 'react';
import { Container  } from '@mui/material';
import AboutMe from './AboutMe.jsx'
import AboutTools from './AboutSkills.jsx';

function About() {
  return (
    <Container>
      <AboutMe/>
      <AboutTools/>
    </Container>
  )
}

export default About;