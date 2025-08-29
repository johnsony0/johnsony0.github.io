import { Box, useTheme, Button, Typography, Grid, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TwitterIcon from '@mui/icons-material/Twitter';
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
        fontSize: '10px'
      }}
      fullWidth
    >
      <Typography sx={{ color: theme.palette.text.primary, fontWeight: 500, fontSize: 12 }}>
        {label}
      </Typography>
    </Button>
  );

  return (
    <Box sx={{
      mx: 'auto',
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    }}>
      <Grid container spacing={1} justifyContent="center" alignItems="flex-start" sx={{mt: '2px'}}>
        <Grid item xs={3} sm={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography  sx={{ color: theme.palette.text.secondary, fontWeight: 600, fontSize: 14 }}>
            Resources
          </Typography>
          <Stack direction="column" spacing={0}>
            {footerButton(<GitHubIcon />, 'https://github.com/johnsony0/clarity', 'Source Code')}
            {footerButton(<EmailIcon />, 'mailto:theclarityextension@gmail.com', 'Email')}
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography sx={{ color: theme.palette.text.secondary, fontWeight: 600, fontSize: 14 }}>
            Socials
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Stack direction="column" spacing={0}>
              {footerButton(<InstagramIcon />, 'temp', 'Instagram')}
              {footerButton(<MusicNoteIcon />, 'temp', 'TikTok')}
            </Stack>
            <Stack direction="column" spacing={0}>
              {footerButton(<YouTubeIcon />, 'temp', 'YouTube')}
              {footerButton(<TwitterIcon />, 'temp', 'Twitter')}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3} sm={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography sx={{ color: theme.palette.text.secondary, fontWeight: 600, fontSize: 14 }}>
            Download
          </Typography>
          <Stack direction="column" spacing={0}>
            {footerButton(<ExtensionIcon />, 'https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj', 'Web Store')}
            {footerButton(<FolderZipIcon />, 'https://github.com/johnsony0/clarity/releases', 'Manual Download')}          
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="body2" sx={{ color: theme.palette.text.disabled, fontSize: 12 }}>
            Clarity is not affiliated with Facebook, Twitter/X, or YouTube
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ClarityFooter;