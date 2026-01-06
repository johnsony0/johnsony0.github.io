import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GetAppIcon from '@mui/icons-material/GetApp';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import bogo from '../../assets/clarity/icon.png';

function ClarityNavBar() {
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
    { label: 'Home', path: '/clarity' },
    //{ label: 'Features', path: '/clarity/features' },
    { label: 'Examples', path: '/clarity/examples' },
    { label: 'Help', path: '/clarity/faq' }
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
          component={Link}
          to='/clarity'
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mr: isMd ? 2 : 10 }}
          aria-label="Clarity homepage"
        >
          <Box
            component="img"
            alt="Clarity Extension Logo"
            src={bogo}
            sx={{
              height: '35px',
              width: 'auto',
            }}
          />
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="open navigation menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} 
              PaperProps={{
                sx: {
                  minWidth: '250px', 
                },
              }}>
              <Tabs
                orientation="vertical"
                value={location.pathname}
                textColor="primary"
                sx={{
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  }
                }}
              >
                {navLinks.map((link) => (
                  <Tab
                    key={link.path}
                    label={link.label}
                    value={link.path}
                    component={Link}
                    to={link.path}
                    aria-label={`${link.label} page`}
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: 'none',
                      padding: '0px',
                      mb: 2,
                      mt: 1,
                      '&.Mui-selected': {
                        backgroundColor: theme.clarity.secondary,
                        color: theme.palette.text.secondary,
                        borderRadius: '50px',
                      },
                      '&:hover': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                ))}
              </Tabs>
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  component="a"
                  href="https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  disableElevation
                  sx={{
                    width: '90%',
                    padding: '10px',
                    textTransform: 'none',
                    color: theme.clarity.primary,
                    backgroundColor: theme.clarity.secondary,
                  }}
                  startIcon={<GetAppIcon />}
                  aria-label="Get Clarity browser extension from the Chrome Web Store"
                >
                  Get Clarity
                </Button>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Tabs
              value={location.pathname}
              textColor="primary"
              sx={{
                '& .MuiTabs-indicator': {
                  display: 'none',
                }
              }}
            >
              {navLinks.map((link) => (
                <Tab
                  key={link.path}
                  label={link.label}
                  value={link.path}
                  component={Link}
                  to={link.path}
                  aria-label={`${link.label} page`}
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: 'none',
                    padding: '0px',
                    m: isMd? '5px' : '5px 10px 5px 10px',
                    '&.Mui-selected': {
                      backgroundColor: theme.clarity.secondary,
                      color: theme.palette.text.secondary,
                      borderRadius: '50px',
                    },
                    '&:hover': {
                      color: theme.palette.text.secondary,
                    },
                  }}
                />
              ))}
            </Tabs>
            <Button
              component="a"
              href="https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              aria-label="Get Clarity browser extension from the Chrome Web Store"
              disableElevation
              sx={{
                padding: '10px',
                ml: 'auto',
                textTransform: 'none',
                color: theme.clarity.primary,
                backgroundColor: theme.clarity.secondary,
              }}
              startIcon={<GetAppIcon />}
            >
              Get Clarity
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ClarityNavBar;