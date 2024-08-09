import React, { useState, useMemo } from 'react';
import { getStoryById } from "./StardewData"; 
import { Box, Typography, List, ListItem, Button, Grid } from '@mui/material';

function StardewQuiz() {
  const defaultUserData = {
    Alex: 0,
    Elliot: 0,
    Harvey: 0,
    Sam: 0,
    Sebastian: 0,
    Shane: 0,
    Abigail: 0,
    Emily: 0,
    Haley: 0,
    Leah: 0,
    Maru: 0,
    Penny: 0
  };
  
  const [currentStoryId, setCurrentStoryId] = useState(0);
  const [userData, setUserData] = useState(defaultUserData);
  const currentStory = getStoryById(currentStoryId);


  const handleOptionClick = (info) => {
    if (info.next_day === 1000){
      let maxValue = -Infinity;
      let maxKeys = [];
      for (const [key, value] of Object.entries(userData)) {
        if (value > maxValue) {
          maxValue = value;
          maxKeys = [key]; 
        } else if (value === maxValue) {
          maxKeys.push(key); 
        }
      }
      console.log(maxKeys[Math.floor(Math.random() * maxKeys.length)])
    } else {
      setUserData((prevUserData) => {
        const updatedData = { ...prevUserData };
        if (info.traits && Object.keys(info.traits).length !== 0) {
          for (const [key, value] of Object.entries(info.traits)) {
            if (updatedData.hasOwnProperty(key)) {
              updatedData[key] += value;
            }
          }
        }
        return updatedData;
      });
      setCurrentStoryId(info.next_day);
    }
  };

  const boxStyles = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/stardew_quiz/background.gif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }), []);

  const innerBoxStyles = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1000px',
    boxShadow: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(213, 184, 149, 0.9)',
    mx: 2,
  }), []);

  const textStyles = useMemo(() => ({
    fontSize: '30px',
    fontFamily: 'StardewValley, sans-serif',
    color: '#491500',
  }), []);

  const buttonStyles = useMemo(() => ({
    fontFamily: 'StardewValley, sans-serif',
    fontSize: '20px',
    color: '#491500',
    backgroundColor: '#DDA059',
    '&:hover': {
      backgroundColor: '#FFDDA2',
    }
  }), []);

  return (
    <Box sx={boxStyles}>
      <Box sx={innerBoxStyles}>
        <Grid container spacing={0}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mx: 2 }}>
            <Typography sx={textStyles}>{`day ${currentStory.day}`}</Typography>
            <Typography sx={textStyles}>{currentStory.time}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography width='80%' sx={textStyles}>
              {currentStory.story}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component='img'
              src={currentStory.img}
              sx={{
                width: '70%',
                height: '40vh',
                objectFit: 'cover'
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <List>
              <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                {Object.entries(currentStory.options).map(([option, info], index) => (
                  <Grid item xs={6} key={index}>
                    <ListItem>
                      <Button
                        fullWidth
                        variant='contained'
                        color='inherit'
                        onClick={() => handleOptionClick(info)}
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
  );
}

export default StardewQuiz;