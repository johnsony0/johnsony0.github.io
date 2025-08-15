import { Box, useTheme, Button, Typography, Divider, Grid, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ExtensionIcon from '@mui/icons-material/Extension';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import React from 'react';

function ClarityFooter(){
  const theme = useTheme();

  const footerButton = (icon, link, label) => (
    <Button
      size="small"
      variant="text"
      href={link}
      color="inherit"
      target="_blank"
      rel="noopener noreferrer"
      startIcon={icon}
      sx={{
        borderRadius: 3,
        transition: 'all 0.2s',
        '&:hover': {
          background: theme.palette.action.hover,
          boxShadow: 1,
        },
      }}
    >
      <Typography sx={{ color: theme.palette.text.primary, fontWeight: 500, fontSize: 15 }}>
        {label}
      </Typography>
    </Button>
  );

  return (
    <Box sx={{
      mx: 'auto',
      width: '95%'
    }}>
      <Divider sx={{ m: 2 }} />
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography sx={{ mb: 1, color: theme.palette.text.secondary, fontWeight: 600 }}>
            Resources
          </Typography>
          <Stack direction="column" spacing={0.1}>
            {footerButton(<GitHubIcon />, 'https://github.com/johnsony0/clarity', 'Source Code')}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography sx={{ mb: 1, color: theme.palette.text.secondary, fontWeight: 600 }}>
            Socials
          </Typography>
          <Stack direction="column" spacing={0.1}>
            {footerButton(<LinkedInIcon />, 'https://linkedin.om/in/johnsony0', 'LinkedIn')}
            {footerButton(<InstagramIcon />, 'https://instagram.com/johnsony0', 'Instagram')}
            {footerButton(<EmailIcon />, 'mailto:theclarityextension.com', 'Email')}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography sx={{ mb: 1, color: theme.palette.text.secondary, fontWeight: 600 }}>
            Download
          </Typography>
          <Stack direction="column" spacing={0.1}>
            {footerButton(<ExtensionIcon />, 'https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj', 'Web Store')}
            {footerButton(<FolderZipIcon />, 'https://github.com/johnsony0/clarity/releases', 'Manual Download')}          
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ m: 2 }} />
      <Typography align="center" variant="body2" sx={{ color: theme.palette.text.disabled, mt: 2 }}>
        Clarity is not affiliated with Facebook, Twitter/X, or YouTube
      </Typography>
    </Box>
  );
}

export default ClarityFooter;