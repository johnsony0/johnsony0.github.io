import React from 'react';
import { Box, Typography } from '@mui/material';

function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant='h2'>404</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </Box>
  );
}

export default NotFound;