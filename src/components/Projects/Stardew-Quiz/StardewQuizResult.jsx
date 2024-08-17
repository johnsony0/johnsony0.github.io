import { Typography, Box, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { isMobile } from 'react-device-detect';
import React, { useState } from 'react';

function StardewQuizResult({result, onRestart}){
  const [openCredits, setOpenCredits] = useState(false);

  const resultStyles = {
    maxHeight: '90vh',
    width: '100%',
    objectFit: 'contain'
  }

  const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/stardew_quiz/background.gif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const containerStyles = {
    display: 'flex',
    width: '90%',
    maxWidth: '500px',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const buttonStyles = {
    fontFamily: 'StardewValley, sans-serif',
    fontSize: isMobile ? '15px' : '20px',
    color: '#491500',
    padding: 0,
    backgroundColor: '#DDA059',
    '&:hover': {
      backgroundColor: '#FFDDA2',
    },
    '&:active': {
      backgroundColor: '#FFDDA2', 
    },
  }

  const onShare = () => {
    const url = window.location.href; 
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  const displayCredits = () => {
    setOpenCredits(true);
  };

  const handleCloseCredits = () => {
    setOpenCredits(false);
  };

  const buttonData = {
    'Share' : onShare,
    'Restart' : onRestart,
    'Credits' : displayCredits,
  }

  return (
    <Box sx={boxStyles}>
      <Grid container sx={containerStyles} spacing={1}>
        <Grid item xs={12}>
          <Box
            component='img'
            key='result-img'
            src={`${process.env.PUBLIC_URL}/stardew_quiz/character_sheets/${result}.webp`}
            sx={resultStyles}
          />
        </Grid>
        {Object.entries(buttonData).map(([label, action]) => (
          <Grid item xs={4} key={label}>
            <Button
              fullWidth
              variant='contained'
              color='inherit'
              sx={buttonStyles}
              onClick={action}
            >
              {label}
            </Button>
          </Grid>
        ))}
        <Grid xs={12}>
          <Typography variant="body2" align="center" sx={{ mt: 2, color: 'black', fontWeight: '900' }}>
            Thank you for playing!!! If you liked the personality quiz please support me by buying me a cup of { }
            <a href="https://www.buymeacoffee.com/johnsony" target="_blank" rel="noopener noreferrer">
              coffee
            </a> (っ˘ڡ˘ς)
          </Typography>
        </Grid>
      </Grid>
      <Dialog open={openCredits} onClose={handleCloseCredits}>
        <DialogTitle>Credits</DialogTitle>
        <DialogContent>
            <p>Fonts: <a href="//www.reddit.com/r/StardewValley/comments/4dtgp7/by_popular_request_a_stardew_valley_font_for_your/" target="_blank" rel="noopener noreferrer">Stardew Font</a> &emsp; <a href="https://fontstruct.com/fontstructions/show/1543912/svthin" target="_blank" rel="noopener noreferrer">Stardew Font Thin</a></p>
            <p>Background image: <a href="https://www.deviantart.com/bratzoid/gallery" target="_blank" rel="noopener noreferrer">https://www.deviantart.com/bratzoid/gallery</a></p>
            <p>Chibi characters: <a href="https://www.deviantart.com/magicalpouchofmagic" target="_blank" rel="noopener noreferrer">https://www.deviantart.com/magicalpouchofmagic</a></p>
            <p>Original idea: <a href="https://sophie006liu.github.io/vegetal/" target="_blank" rel="noopener noreferrer">https://sophie006liu.github.io/vegetal/</a></p>
            <p>Based on game created by: <a href="https://x.com/concernedape" target="_blank" rel="noopener noreferrer">https://x.com/concernedape</a></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCredits} color="inherit" >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default StardewQuizResult

