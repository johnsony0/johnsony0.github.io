import React, { useState, useEffect } from 'react';
import { Typography, useMediaQuery, Box } from '@mui/material';
import portrait from '../../assets/me-with-fish.jpg';
import { useTheme } from '@mui/material/styles';

const Typewriter = ({ text, delay, theme, isMd }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText(text[0]);
    setCurrentIndex(1);
  }, [text]);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <Box sx={{backdropFilter: isMd ? 'none' : 'blur(1px)',display: 'inline-block'}}>
      <Typography variant="h4" sx={{ color: isMd ? 'white' : theme.palette.text.secondary }}>
        <b>{currentText}</b>
      </Typography>
    </Box>
  );
};

function Home() {
  const wordList = ['Software Designer', 'R&B Listener', 'Computer Engineer', 'Avid Gamer','ML GOAT'];
  const helloList = ['Hi', '你好', 'مرحبا', 'Hello', 'Bonjour', 'Привет', 'Hola'];
  const [wordIndex, setWordIndex] = useState(0);
  const [helloIndex, setHelloIndex] = useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex(prevIndex => (prevIndex + 1) % wordList.length);
      setHelloIndex(Math.floor(Math.random() * helloList.length));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [wordList.length, helloList.length]);

  const textOverlayBottom = isMd ? '30%' : '50%';

  return (
    <div className='container'>
      <img src={isMd ? portrait : portrait} alt="Background" className='background-image' />
      <div className='text-overlay'>
        <Box sx={{marginBottom: textOverlayBottom }}>
          <Typography variant="h4" sx={{ color: isMd ? 'white' : theme.palette.text.secondary }}>
            <b>{helloList[helloIndex]}</b>
          </Typography>
          <Typography variant="h4" sx={{ color: isMd ? 'white' : theme.palette.text.secondary }}>
            I'm <b>Johnson</b>
          </Typography>
        </Box>
        <Typewriter text={wordList[wordIndex]} delay={100} theme={theme} isMd={isMd} />
      </div>
    </div>
  );
}

export default Home;