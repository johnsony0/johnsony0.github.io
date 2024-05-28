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
          Born and raised by immigrant parents in NYC
          along with two siblings was not easy, but it
          developed many of the strengths I carry with me today,
          such as creative thinking and perseverance.
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
        I graduated from Boston University with a B.S in 
        Computer Engineering and concentration in Machine Learning in 2024, 
        and I am looking forward to creating my mark on the industry. 
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
        I am a software engineer, with years of study in ML
        and also experience in creating APIs, CLIs, websites, and UIs. 
        I also have a hardware background to excel in integrated circuits. 
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutMe