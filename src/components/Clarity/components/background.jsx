import {Box} from '@mui/material';

export function ClarityBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: 'radial-gradient(circle, #d2bd96 5%, #f5f5dc 50%, #F8F8F8 100%)',
        opacity: 0.8,
      }}
    />
  );
}

