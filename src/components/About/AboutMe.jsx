import React from 'react';
import { Container, Typography, Box, useMediaQuery  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bu from '../../assets/Boston_University.png';
import me from '../../assets/me.png'


function AboutMe(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { sm:'row', xs:'column' }, }}>
        <Typography variant='body2' sx={{ color: theme.palette.text.secondary, width: isMobile ? '90%' : '50%'}}>
          I am currently attending an M.S. in Computer 
          Engineering at New York University, following my graduation from Boston University 
          with a B.S. in Computer Engineering and concentration in Machine Learning in 2024.
        </Typography>
        <Box
          component="img"
          src={me}
          alt="Logo"
          sx={{
            width: isMobile ? '40%' : '20%',
            height: 'auto',
            margin: isMobile ?'5% 10% 5% 10%' : '3% 10% 3% 10%'
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='body2' sx={{ color: theme.palette.text.secondary, width: '90%'}}>
          I enjoy working on engineering problems regardless of what layer of the stack they exist. From 
          data driven applications (e.g. Looking into the history of vulnerabilities in Kubernetes), 
          to machine-learning workloads (e.g. Developing a model which classifies political bias, such as left or right leaning,
          and integrating it within a Chrome extension to automatically filter posts on Facebook or Twitter.), 
          or embedded systems (e.g. A device using gyroscopes and accelerometers to detect tremors or dyskinesia).
          My diverse experiences give me a breadth of knowledge on which to draw on for future solutions.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection: { sm:'row', xs:'column' }, marginBottom: '20px' }}>
        <Box
          component="img"
          src={bu}
          alt="Logo"
          sx={{
            width: isMobile ? '40%' : '20%',
            height: 'auto',
            margin: isMobile ?'5% 10% 5% 10%' : '3% 10% 3% 10%'
          }}
        />
        <Typography variant='body2' sx={{ color: theme.palette.text.secondary,  width: isMobile ? '90%' : '50%'}}>
          Currently, my work revolves around computer architecture and VLSI, specifically in
          developing hardware accelerators. 
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutMe