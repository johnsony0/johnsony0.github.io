import React from 'react';
import resume from '../../assets/Resume.pdf'
import { Box } from '@mui/material';

function Resume() {
  return (
    <Box sx={{ position: 'relative',  height: 'calc(100vh - 64px - 32px)' }}>
      <iframe 
        className="pdf" 
        title="Resume"
        src={resume}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
    </Box>
  );
}

export default Resume;