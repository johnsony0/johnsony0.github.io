import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Confetti from 'react-confetti';
import { Grid, Container, Typography, Box, Button, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import { OpenSequence } from './FGEO24Open';
import { MiddleSequence } from './FGEO24Middle';

import PikminSound from '../../../assets/sounds/pikmin-gcn.mp3';
import YippieeSound from '../../../assets/sounds/yippee-tbh.mp3';

function FGEO24() {
  const [phase, setPhase] = useState(Cookies.get('ILoveYouTheMost') ? 'end' : 'open');
  const [showConfetti, setShowConfetti] = useState(false);
  const [coupons, setCoupons] = useState([
    {
      id: 1, 
      text: 'Private Chef', 
      code: '🍽️🔥', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #91a3ff, #676bff)'  
    },
    { 
      id: 2, 
      text: 'Summon Me', 
      code: '🔔🕯️', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #7f79e2, #5650b5)'  
    },
    { 
      id: 3, 
      text: 'Boba & Breakfast', 
      code: '🧋🍳', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #6d66d0, #4b429e)'  
    },
    {
      id: 4, 
      text: 'Movie Night', 
      code: '🎬🍿', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #5b57ba, #3a377f)'  
    },
    { 
      id: 5, 
      text: 'Date Night', 
      code: '🍷🎥', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #4a4287, #30265d)'  
    },
    { 
      id: 6, 
      text: 'Cuddles', 
      code: '🐻❤️', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #433a79, #2f2750)' 
    },
    { 
      id: 7, 
      text: 'Cuddles Again', 
      code: '💞🤗', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #3c316d, #292048)' 
    },
    { 
      id: 8, 
      text: 'Chores', 
      code: '🧹🧽', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #35285d, #211b48)' 
    },
    { 
      id: 9, 
      text: 'Anything', 
      code: '🤷‍♂️💫', 
      redeemed: false, 
      showCode: false, 
      gradient: 'linear-gradient(to bottom right, #2b234d, #171032)'  
    },
  ]);

  useEffect(()=> {
    if (phase === 'end'){
      Cookies.set('ILoveYouTheMost', 'True', { expires: 365 });
    }
  },[phase]);

  const pikminSound = () => {
    const audio = new Audio(PikminSound);
    if (audio) {
      audio.volume = 0.1;
      audio.play();
    }
  };

  const sounds = [
    PikminSound,
    PikminSound,
    PikminSound,
    YippieeSound,
    YippieeSound,
    YippieeSound,
    null, 
    null, 
    null, 
    null, 
  ];

  const randomSound = () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selectedSound = sounds[randomIndex];
    if (!selectedSound) {
      return;
    }
    const audio = new Audio(selectedSound);
    audio.volume = 0.05;
    try {
      audio.play();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const handlePresent = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    setPhase('end');
  };

  const onRestart = () => {
    setPhase('open');
    Cookies.remove('ILoveYouTheMost');
  };

  const toggleCode = (id) => {
    setCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.id === id ? { ...coupon, showCode: !coupon.showCode } : coupon
      )
    );
  };

  return (
    <>
      {showConfetti && <Confetti />}
      {phase === 'open' ? (
        <OpenSequence setPhase={setPhase} pikminSound={pikminSound} />
      ) : phase === 'middle' ? (
        <MiddleSequence randomSound={randomSound} handlePresent={handlePresent} />
      ) : (
        <Container
          sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Grid container 
          spacing={2}
          sx={{
            justifyContent: "center",
            maxWidth: '1000px'
          }}
          >
            <Grid item xs={12}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Tooltip title="Click 'Show Code' and send me a screenshot to redeem :D. If you can find the hidden code, I'll reset them all :3.">
                  <IconButton
                    sx={{ mr: 1 }} 
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" align="center">
                  Couple Coupons 💖
                </Typography>
              </Box>
            </Grid>
            {coupons.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <Box
                  sx={{
                    maxWidth: 300,
                    mx: 'auto',
                    p: 4,
                    background: item.redeemed ? 'linear-gradient(to bottom right, #808080, #a9a9a9)' : item.gradient,
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '16px',
                    position: 'relative',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                    '&:hover': {
                      transform: 'scale(1.05)', 
                      boxShadow: 6, 
                    }
                  }}
                >
                  <Typography variant="body" fontWeight="600">
                    {item.text}
                  </Typography>
                  <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                    <Box
                      id="cpnCode"
                      sx={{
                        border: '2px dashed white',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: '4px 0 0 4px',
                      }}
                    >
                      {item.showCode || item.redeemed ? item.code : '*****'}
                    </Box>
                    <Button
                      id="cpnBtn"
                      onClick={() => toggleCode(item.id)}
                      disabled={item.redeemed}
                      sx={{
                        px: 2,
                        py: 1,
                        backgroundColor: 'white',
                        color: '#7e57c2',
                        borderRadius: '0 4px 4px 0',
                        cursor: 'pointer',
                      }}
                    >
                      {item.showCode ? 'Hide Code' : 'Show Code'}
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '50%',
                      left: -24,
                      transform: 'translateY(-50%)',
                    }}
                  />
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '50%',
                      right: -24,
                      transform: 'translateY(-50%)',
                    }}
                  />
                </Box>
              </Grid>
            ))}
            <Grid container spacing={2} sx={{py: 3}}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" onClick={randomSound}>
                  Sounds!!!
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" onClick={onRestart}>
                  Restart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default FGEO24;
