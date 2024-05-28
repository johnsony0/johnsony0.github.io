import React from 'react';
import { Container  } from '@mui/material';
import AboutMe from './AboutMe.jsx'
import AboutTools from './AboutSkills.jsx';
import Divider from '@mui/material/Divider';


function About() {
  return (
    <Container>
      <AboutMe/>
      <Divider variant="middle" />
      <AboutTools/>
    </Container>
  )
}

export default About;