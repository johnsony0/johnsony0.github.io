import React from 'react';
import BeforeAfterSlider from "../BeforeAfterSlider";
import { Paper, Box } from '@mui/material';
import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';
import filter_before from '../../../assets/clarity/clean_filter_before.png';
import filter_after from '../../../assets/clarity/clean_filter_after.png';

function ClarityFB(){
  return (
    <Box>
      <BeforeAfterSlider
        beforeImage={fb_before}
        afterImage={fb_after}
        text={'Slide or drag to see changes on Facebook home page!'}
      />
      <Paper
        sx={{
          backgroundColor: 'whitesmoke',
          padding: '10px'
        }}
      >
        <BeforeAfterSlider
          beforeImage={filter_before}
          afterImage={filter_after}
          text={'Slide or drag to see changes on Facebook profile & posts!'}
        />
      </Paper>
    </Box>
  );
}

export default ClarityFB;