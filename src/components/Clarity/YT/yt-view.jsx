import React from 'react';
import BeforeAfterSlider from "../BeforeAfterSlider";
import { Paper, Box, Typography } from '@mui/material';
import yt_before from '../../../assets/clarity/clean_yt_before.png';
import yt_after from '../../../assets/clarity/clean_yt_after.png';
import video_before from '../../../assets/clarity/clean_video_before.png';
import video_after from '../../../assets/clarity/clean_video_after.png';  

function ClarityYT(){
  return (
    <Box sx={{display: 'flex'}}>
      <Typography
      >
        YouTube Home Page
      </Typography>
      <BeforeAfterSlider
        beforeImage={yt_before}
        afterImage={yt_after}
        text={'Slide or drag to see changes on YouTube home page!'}
      />
      <Paper
        sx={{
          backgroundColor: 'whitesmoke',
          padding: '10px'
        }}
      >
        <BeforeAfterSlider
          beforeImage={video_before}
          afterImage={video_after}
          text={'Slide or drag to see changes on a YouTube video!'}
        />
      </Paper>
    </Box>
  );
}

export default ClarityYT;