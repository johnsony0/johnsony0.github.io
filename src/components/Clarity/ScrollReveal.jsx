import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const ScrollReveal = ({ beforeImage, afterImage }) => {
  const [clipPath, setClipPath] = useState('inset(0 0 100% 0)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const startScroll = 200; 
      const endScroll = 800;

      const progress = Math.max(
        0,
        Math.min((scrollPosition - startScroll) / (endScroll - startScroll), 1)
      );

      setClipPath(`inset(0 0 ${100 - progress * 100}% 0)`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, 
      }}
    >
      <img
        src={beforeImage}
        alt="Before"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
        }}
      />
      <img
        src={afterImage}
        alt="After"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          clipPath: clipPath,
        }}
      />
    </Box>
  );
};

export default ScrollReveal;