import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const LightCustomHandle = () => {
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

const DarkCustomHandle = () => {
  return (
    <Box
      sx={{
        width: '5px',
        height: '100%',
        backgroundColor: 'black',
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
          backgroundColor: 'black',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
          cursor: 'pointer'
        }}
      />
    </Box>
  );
};

export function BeforeAfterSlider({ firstImage, secondImage, header, theme = 'light' }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const handleSliderChange = (position) => {
    if (position !== 50) {
      setOverlayVisible(false);
    }
  };
  
  return (  
    <Box
      sx={{
      p: { md: 8, xs: 0 },
      width: '100%',
    }}
    >
      <Box sx={{ position: 'relative', width: '100%'}}>
        <ReactCompareSlider
          aria-label={`${header}-before-after-slider`}
          handle={theme === 'light' ? <LightCustomHandle/> : <DarkCustomHandle/>}
          onPositionChange={handleSliderChange}
          itemOne={<ReactCompareSliderImage src={firstImage} srcSet={firstImage} alt="before" />}
          itemTwo={<ReactCompareSliderImage src={secondImage} srcSet={secondImage} alt="after" />}
          style={{
            borderRadius: '32px'
          }}
        />
        {overlayVisible && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', 
              pointerEvents: 'none',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                left: '25%', 
                transform: 'translateX(-50%)', 
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                p: 1,
                borderRadius: 1,
              }}
            >
              Before
            </Typography>
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
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowBackIosNewIcon/>
              <Typography sx={{ mr: 1, ml: 1 }}>
                {'Slide to see changes!'}
              </Typography>
              <ArrowForwardIosIcon/>
            </Box>
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                left: '75%',
                transform: 'translateX(-50%)', 
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                p: 1,
                borderRadius: 1,
              }}
            >
              After
            </Typography>
          </Box>
        )}
        </Box>
    </Box>
  );
}