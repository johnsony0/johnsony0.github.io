import React from 'react';
import ScrollReveal from "../ScrollReveal";
import { Box, Typography } from '@mui/material';
import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';

function ClarityFB(){
  return (
    <>
    <ScrollReveal
      beforeImage={fb_before}
      afterImage={fb_after}
    />
    <Box sx={{ height: '2000px', pt: '100vh' }}>
    </Box>
  </>
  );
}

export default ClarityFB;