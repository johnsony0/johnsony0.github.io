import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navStyle = {
    fontFamily: 'Segoe UI',
    fontSize: '15pt',
    textTransform: 'none',
}

function NavBar() {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: '#707070', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{...navStyle}}>
                jy
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                <Button color="inherit" component={Link} to="/" 
                sx={{...navStyle,
                    textTransform: location.pathname === '/' ? 'uppercase' : 'none' 
                }}
                >home</Button>
                <Button color="inherit" component={Link} to="/about"
                sx={{...navStyle,
                    textTransform: location.pathname === '/about' ? 'uppercase' : 'none' 
                }}>about</Button>
                <Button color="inherit" component={Link} to="/experience"
                sx={{...navStyle,
                    textTransform: location.pathname === '/experience' ? 'uppercase' : 'none' 
                }}>experience</Button>
                <Button color="inherit" component={Link} to="/projects"
                sx={{...navStyle,
                    textTransform: location.pathname === '/projects' ? 'uppercase' : 'none' 
                }}>projects</Button>
                <Button color="inherit" component={Link} to="/resume"
                sx={{...navStyle,
                    textTransform: location.pathname === '/resume' ? 'uppercase' : 'none' 
                }}>resume</Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button color="inherit" href="https://github.com/johnsony0" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: 'grey' }} />
                </Button>
                <Button color="inherit" href="https://www.linkedin.com/in/johnson-yang-b0303b205/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ color: 'grey' }} />
                </Button>
                <Button color="inherit" href="https://www.instagram.com/johnson.yang/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ color: 'grey' }} />
                </Button>
            </Box>
        </Toolbar>
        </AppBar>
    );
}

export default NavBar;