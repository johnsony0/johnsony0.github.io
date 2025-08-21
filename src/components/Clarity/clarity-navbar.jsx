import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GetAppIcon from '@mui/icons-material/GetApp'; 
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import bogo from '../../assets/clarity/icon.png'; 

function ClarityNavBar(){
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: 'Home', path: '/clarity/home' },
    { label: 'Facebook', path: '/clarity/fb' },
    { label: 'Twitter/X', path: '/clarity/x' },
    { label: 'YouTube', path: '/clarity/yt' },
    { label: 'Shared', path: '/clarity/shared' },
    { label: 'Help', path: '/clarity/faq'}
  ];

  return (
    <AppBar 
      position="sticky"
      component="nav"
      sx={{ 
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.8)' : 'white',
        backdropFilter: trigger ? 'blur(5px)' : 'none',
        color: theme.palette.text.primary,
        boxShadow: trigger ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        height: '64px'
      }}
      
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          component="img"
          alt="Logo"
          src={bogo}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '35px',
            width: 'auto',
          }}
        />
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.path} disablePadding>
                      <ListItemButton
                        color="inherit"
                        component={Link}
                        to={link.path}
                        sx={{
                          padding: '20px',
                          textTransform: location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(`${link.path}/`)) ? 'uppercase' : 'none',
                        }}
                      >
                        {link.label}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Button
                  component="a"
                  href="https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="text"
                  color='inherit'
                  fullWidth
                  sx={{
                    padding: '20px',
                  }}
                  startIcon={
                    <GetAppIcon/>
                  }
                >
                  Get Clarity
                </Button>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  color="inherit"
                  component={Link}
                  to={link.path}
                  sx={{
                    padding: isMd ? '5px' : '20px',
                    //margin: '0 10px 0 10px',
                    color: theme.palette.text.primary,
                    textTransform: location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(`${link.path}/`)) ? 'uppercase' : 'none',
                    '&:hover': {
                      color: theme.palette.text.secondary,
                  },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
            <Button
              component="a"
              href="https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color='inherit'
              sx={{
                padding: '10px',
              }}
              startIcon={
                <GetAppIcon/>
              }
            >
              Get Clarity
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ClarityNavBar;