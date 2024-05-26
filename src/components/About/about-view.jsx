import React from 'react';
import { Container, Typography, Box, useMediaQuery  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bu from '../../assets/Boston_University.png';
import me from '../../assets/me.png'

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { md: 'row', sm:'column', xs:'column' }, }}>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, width: isMobile ? '50%' : '70%'}}>
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
            width: isMobile ? '50%' : '30%',
            height: 'auto',
            margin: '5% 10% 5% 10%'
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, width: '80%'}}>
        Growing up in the early days of the internet, 
        I saw first hand the many problems being solved by better technology and engineering. 
        This led me to be fascinated by software, however I also always enjoyed a more hands-on approach to life, 
        as such when entering college, my decision to apply for computer engineering was obvious. 
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection: { md: 'row', sm:'column', xs:'column' } }}>
        <Box
          component="img"
          src={bu}
          alt="Logo"
          sx={{
            width: isMobile ? '50%' : '30%',
            height: 'auto',
            margin: '5% 10% 5% 10%'
          }}
        />
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary,  width: isMobile ? '50%' : '70%'}}>
        I graduated from Boston University with a B.S in 
        Computer Engineering and concentration in Machine Learning in 2024, 
        and I am looking forward to creating my mark on the industry. 
        </Typography>
      </Box>
    </Container>
  );
}

export default About;