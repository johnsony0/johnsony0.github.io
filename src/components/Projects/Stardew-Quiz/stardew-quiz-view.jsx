import React, { useState, useEffect } from 'react';
import { getStoryById } from "./StardewData"; 
import { Box, Typography } from '@mui/material'
import { List, ListItem, ListItemButton } from '@mui/material';

function StardewQuiz(){
  const defaultUserData = {
    Alex : 0,
    Elliot : 0,
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
  }
  const [currentStoryId, setCurrentStoryId] = useState(0);
  const [userData, setUserData] = useState(defaultUserData);
  const currentStory = getStoryById(currentStoryId);

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const handleOptionClick = (info) => {
    //gets next day and stores trait info
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
  };

   return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      height: 'calc(100vh - 64px - 32px)',
    }}
    >
      <Box
      sx={{
        maxWidth: '1000px',
        boxShadow: 4,
        borderRadius: 1,
        py: 1,
        my: 1,
        mx: 1,
      }}
      >
        <Typography>{currentStory.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Typography>
        <Typography>{currentStory.story}</Typography>
        <List>
          {Object.entries(currentStory.options).map(([option,info], index) => (
            <ListItem key={index}>
              <ListItemButton 
              variant='contained' 
              onClick={() => handleOptionClick(info)} 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
              {option}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default StardewQuiz;