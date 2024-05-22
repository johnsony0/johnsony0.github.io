import React, { useState, useEffect } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import portrait from '../../assets/self-portrait.jpg';
import { useTheme } from '@mui/material/styles';

function Home() {
  const wordList = ['Software Designer','R&B Listener', 'Avid Gamer','Engineer'];
  const helloList = ['Hi','你好','مرحبا','Hello','Bonjour','Привет','Hola']
  const [wordIndex, setWordIndex] = useState(0);
  const [helloIndex, setHelloIndex] = useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex(prevIndex => (prevIndex + 1) % wordList.length);
      setHelloIndex(Math.floor(Math.random() * helloList.length))
    }, 1000);

    return () => clearInterval(intervalId);
  }, [wordList.length,helloList.length]);

  const imageClass = isMd ? 'background-image-md-sm' : 'background-image-lg'
  const containerClass = isMd? 'container-md-sm' : 'container-lg'
  const textOverlayClass = isMd ? 'text-overlay-md-sm' : 'text-overlay-lg'
  const textOverlaybottom = isMd ? '30%' : '40%'

  return (
    <div className={containerClass}>
      <img src={portrait} alt="Background" className={imageClass} />
      <div className={textOverlayClass}>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
          <b>{helloList[helloIndex]}</b>
        </Typography>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary, marginBottom:textOverlaybottom }}>
          I'm <b>Johnson</b>
        </Typography>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
          {wordList[wordIndex]}
        </Typography>
      </div>
    </div>
  );
}

export default Home;