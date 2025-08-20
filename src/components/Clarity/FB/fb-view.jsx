import React from 'react';
import { Box, Divider } from '@mui/material';
import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';
import filter_before from '../../../assets/clarity/clean_filter_before.png';
import filter_after from '../../../assets/clarity/clean_filter_after.png';
import { BeforeAfterSlider } from '../before-after-component';

function ClarityFB(){
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {BeforeAfterSlider({ firstImage: fb_before, secondImage: fb_after, header: 'Facebook Home' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
      {BeforeAfterSlider({ firstImage: filter_before, secondImage: filter_after, header: 'Facebook Profile + Posts' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
    </Box>
  );
}

export default ClarityFB;