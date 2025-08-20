import React from 'react';
import { Box, Divider } from '@mui/material';
import yt_before from '../../../assets/clarity/clean_yt_before.png';
import yt_after from '../../../assets/clarity/clean_yt_after.png';
import video_before from '../../../assets/clarity/clean_video_before.png';
import video_after from '../../../assets/clarity/clean_video_after.png';  
import yt_profile_before from '../../../assets/clarity/clean_yt_profile_before.png';
import yt_profile_after from '../../../assets/clarity/clean_yt_profile_after.png';
import { BeforeAfterSlider } from '../before-after-component';

function ClarityYT(){
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {BeforeAfterSlider({ firstImage: video_before, secondImage: video_after, header: 'YouTube Video' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
      {BeforeAfterSlider({ firstImage: yt_before, secondImage: yt_after, header: 'YouTube Home' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
      {BeforeAfterSlider({ firstImage: yt_profile_before, secondImage: yt_profile_after, header: 'YouTube Profile' })}      
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
    </Box>
  );
}

export default ClarityYT;