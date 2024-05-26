import React, { useState, useEffect } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import portrait from '../../assets/self-portrait.jpg';
import { useTheme } from '@mui/material/styles';

const Typewriter = ({ text, delay, theme }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
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
    <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
      {currentText}
    </Typography>
  );
};

function Home() {
  const wordList = ['Software Designer', 'R&B Listener', 'Avid Gamer', 'Computer Engineer'];
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
      <img src={portrait} alt="Background" className='background-image' />
      <div className='text-overlay'>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
          <b>{helloList[helloIndex]}</b>
        </Typography>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary, marginBottom: textOverlayBottom }}>
          I'm <b>Johnson</b>
        </Typography>
        <Typewriter text={wordList[wordIndex]} delay={100} theme={theme} />
      </div>
    </div>
  );
}

export default Home;