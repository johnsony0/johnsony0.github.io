import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Company A",
    description: "Developed web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Startup B",
    description: "Worked on improving UI/UX of the company's main product.",
  },
  {
    title: "Backend Developer",
    company: "Enterprise C",
    description: "Built and maintained APIs using Python and Django.",
  },
];

const JobBox = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const nextJob = () => {
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const previousJob = () => {
    setCurrentJobIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 1 : prevIndex - 1
    );
  };

  const { title, company, description } = jobs[currentJobIndex];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: isMobile ? '90%' : '50%',
        margin: '0 auto',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
        {company}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button variant="contained" onClick={previousJob}>
          Previous
        </Button>
        <Button variant="contained" onClick={nextJob}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default JobBox;