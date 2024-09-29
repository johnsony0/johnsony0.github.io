import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';
import PikminSound from '../../../assets/sounds/pikmin-gcn.mp3'

export const OpenSequence = ({setPhase, pikminSound}) => {
  const audioRef = useRef(null);

  const onClick = () => {
    pikminSound();
    setPhase('middle');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 200"
        initial="hidden"
        animate="visible"
        width="300"
        height="200"
      >
        <motion.circle
          cx="100"
          cy="50"
          r="10"
          stroke="black"
          fill="black"
          strokeWidth="2"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { duration: 0.5, delay: 0.5 },
            },
          }}
        />
        <motion.circle
          cx="200"
          cy="50"
          r="10"
          stroke="black"
          fill="black"
          strokeWidth="2"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { duration: 0.5, delay: 1 },
            },
          }}
        />
        <motion.path
          d="M 90 100 C 90 155 150 155 150 100 C 150 155 215 155 210 100"
          fill="transparent"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          MEEEEEOOOOOOOOWWWWWWWWWWWWW
        </Button>
        <audio ref={audioRef} src={PikminSound} />
      </motion.div>
    </Box>
  );
};

