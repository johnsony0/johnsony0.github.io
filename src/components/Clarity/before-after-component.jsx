import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const CustomHandle = () => {
  return (
    <Box
      sx={{
        width: '5px',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: 'white',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
          cursor: 'pointer'
        }}
      />
    </Box>
  );
};

export function BeforeAfterSlider({ firstImage, secondImage, header }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const handleSliderChange = (position) => {
    if (position !== 50) {
      setOverlayVisible(false);
    }
  };
  
  return (  
    <Box sx={{
      padding: 2, width: { xs: '100%', sm: '80%', md: '60%' },
      }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        {header}
      </Typography>
      <Box sx={{ position: 'relative', width: '100%'}}>
        <ReactCompareSlider
          handle={<CustomHandle/>}
          onPositionChange={handleSliderChange}
          itemOne={<ReactCompareSliderImage src={firstImage} srcSet={firstImage} alt="before" />}
          itemTwo={<ReactCompareSliderImage src={secondImage} srcSet={secondImage} alt="after" />}
        />
        {overlayVisible && (
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'rgba(0,0,0,0.7)',
              color: 'white',
              px: 1,
              py: 1,
              borderRadius: 2,
              zIndex: 2,
              textAlign: 'center',
              fontSize: { xs: 16, sm: 18 },
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowBackIosNewIcon/>
            <Typography sx={{ mr: 1 }}>
              {'Slide to see changes!'}
            </Typography>
            <ArrowForwardIosIcon/>
          </Box>)}
        </Box>
    </Box>
  );
}