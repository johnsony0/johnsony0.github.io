import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Paper, useTheme } from '@mui/material';

function Timer() {
  const theme = useTheme();

  // Japanese emoticons to rotate
  const kaomojis = [
    '(◕‿◕✿)', '(｡♥‿♥｡)', '(✿◠‿◠)', '(づ｡◕‿‿◕｡)づ', 
    '(●´ω｀●)', '(๑•́ ₃ •̀๑)', '(╯◕_◕)╯', '(o^▽^o)',
    '(シ. .)シ', 'd(>_< )'
  ];

  const calculateTimeLeft = () => {
    // Current date
    const now = new Date();
    // May 18th of current year
    let targetYear = now.getFullYear();
    let targetDate = new Date(`May 18, ${targetYear} 00:00:00`);

    // If May 18th has already passed this year, set to next year
    if (now > targetDate) {
      targetYear++;
      targetDate = new Date(`May 18, ${targetYear} 00:00:00`);
    }

    const difference = +targetDate - +now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setEmojiIndex((prevIndex) => (prevIndex + 1) % kaomojis.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [kaomojis.length]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const isItToday = Object.values(timeLeft).every(val => val === 0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.mode === 'light' ? '#F8F8F8' : '#121212',
        padding: 3,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 6,
          fontWeight: 'bold',
          color: '#292922',
          textAlign: 'center',
          fontFamily: 'Segoe UI',
          fontSize: { xs: '2.5rem', md: '3.75rem' }
        }}
      >
        {isItToday ? "WOOHOOOO CONGRATSSS!!!" : "Countdown to Graduation..."}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {timeUnits.map((unit) => (
          <Paper
            key={unit.label}
            elevation={0}
            sx={{
              p: 3,
              minWidth: { xs: '120px', sm: '140px' },
              textAlign: 'center',
              backgroundColor: '#fdfaf1',
              borderRadius: 4,
              border: '1px solid #e8dec9',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#292922',
                fontFamily: 'Segoe UI',
                mb: 1,
                fontSize: { xs: '3rem', md: '3.5rem' }
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </Typography>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 'bold',
                color: '#707070',
                letterSpacing: 2,
                fontSize: '0.75rem'
              }}
            >
              {unit.label}
            </Typography>
          </Paper>
        ))}
      </Stack>
      
      {!isItToday && (
        <Typography 
          variant="h5" 
          sx={{ 
            mt: 8, 
            color: '#707070', 
            fontWeight: 500,
            fontFamily: 'Segoe UI',
            minHeight: '2em', // Prevent layout shift
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Box component="span" sx={{ fontSize: '1.5rem', color: '#292922' }}>
            {kaomojis[emojiIndex]}
          </Box>
        </Typography>
      )}
    </Box>
  );
}

export default Timer;
