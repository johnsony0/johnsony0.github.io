import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const navStyle = {
    fontFamily: 'Segoe UI',
    fontSize: '15pt',
    textTransform: 'none',
};

function NavBar(){
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const trigger = useScrollTrigger();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navLinks = [
        { label: 'home', path: '/home' },
        { label: 'about', path: '/about' },
        { label: 'experience', path: '/experience' },
        { label: 'projects', path: '/projects' },
        { label: 'resume', path: '/resume' },
    ];

    return (
        <AppBar 
            position="sticky"
            component="nav"
            sx={{ 
                backgroundColor: trigger ? 'rgba(255, 255, 255, 0.8)' : 'white',
                backdropFilter: trigger ? 'blur(5px)' : 'none',
                color: '#707070',
                boxShadow: trigger ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ ...navStyle }}>
                    jy
                </Typography>
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
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                key={link.path}
                                                color="inherit"
                                                component={Link}
                                                to={link.path}
                                                sx={{
                                                    ...navStyle,
                                                    textTransform: location.pathname === link.path ? 'uppercase' : 'none',

                                                }}
                                            >
                                                {link.label}
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
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
                                    ...navStyle,
                                    textTransform: location.pathname === link.path ? 'uppercase' : 'none',
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;