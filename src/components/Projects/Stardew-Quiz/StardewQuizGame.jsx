import React, { useMemo } from 'react';
import { Box, Typography, List, ListItem, Button, Grid } from '@mui/material';
import {isMobile} from 'react-device-detect';

function StardewQuizGame({currentStory,handleOptionClick}){

  const boxStyles = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/stardew_quiz/background.gif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }), []);

  const innerBoxStyles = useMemo(() => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1000px',
    boxShadow: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(213, 184, 149, 0.9)',
    margin: 2,
  }), []);


  const headerStyles = useMemo(() => ({
    position: 'absolute',
    display: 'flex', 
    justifyContent: 'space-between',
    padding: 2,
  }), []);

  const bodyStyles = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
  }),[])

  const textStyles = useMemo(() => ({
    fontSize: isMobile ? '20px' : '25px',
    fontFamily: 'StardewValley, sans-serif',
    color: '#491500',
  }), []);

  const imageStyles = useMemo(() => ({
    width: '80%',
    maxHeight: '40vh',
    objectFit: 'contain'
  }), []);

  const buttonStyles = useMemo(() => ({
    fontFamily: 'StardewValley, sans-serif',
    fontSize: isMobile ? '14px' : '18px',
    color: '#491500',
    backgroundColor: '#DDA059',
    '&:hover': {
      backgroundColor: '#FFDDA2',
    }
  }), [])
  
  return (
    <Box sx={boxStyles}>
      <Box sx={innerBoxStyles}>
        <Grid container sx={headerStyles}>
          <Typography sx={textStyles}>{currentStory.day !== undefined && `day ${currentStory.day}`}</Typography>
          <Typography sx={textStyles}>{currentStory.time}</Typography>
        </Grid>
        <Box sx={bodyStyles}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography width='80%' sx={textStyles}>
                {currentStory.story}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                component='img'
                src={currentStory.img}
                sx={imageStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <List>
                <Grid container spacing={0.1} sx={{ display: 'flex', justifyContent: 'center' }}>
                  {Object.entries(currentStory.options).map(([option, info], index) => (
                    <Grid item xs={12} key={index} >
                      <ListItem>
                        <Button
                          fullWidth
                          variant='contained'
                          color='inherit'
                          onClick={(event) => handleOptionClick(info,event)}
                          sx={buttonStyles}
                        >
                          {option}
                        </Button>
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default StardewQuizGame;

