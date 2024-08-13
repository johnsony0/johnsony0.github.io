import React, { useMemo } from 'react';
import { Box } from '@mui/material';


function StardewQuizResult({result}){

  const boxStyles = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/stardew_quiz/background.gif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }), []);

  const imageStyles = useMemo(() => ({
    width: 'auto',
    maxHeight: '90vh',
    objectFit: 'contain',
  }), []);

  return (
    <Box sx={boxStyles}>
      <Box
        component='img'
        key='result-img'
        src={`${process.env.PUBLIC_URL}/stardew_quiz/character_sheets/${result}.webp`}
        sx={imageStyles}
      />
    </Box>
  )
}

export default StardewQuizResult

