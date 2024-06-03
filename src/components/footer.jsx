import { useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import {ClickAwayListener, Tooltip,Typography } from '@mui/material';
import React from 'react';

function Footer(){
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
      };
    
      const handleTooltipOpen = () => {
        if(open){
            setOpen(false);
        } else {
            setOpen(true);
        }
      };

    return(
        <Box sx={{ display: 'flex' , height:'32px', alignContent:'center', justifyContent:'center'}}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                    PopperProps={{
                    disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    arrow
                    placement='top'
                    title={
                        <React.Fragment>
                            <Typography variant='caption'>johnsony@bu.edu <b>(preferred)</b></Typography>
                            <br />
                            <Typography variant='caption'>7184155344</Typography>
                        </React.Fragment>
                    }
                >
                    <IconButton color='inherit'
                        sx={{ 
                            '&:hover .MuiSvgIcon-root': {
                                color: theme.palette.text.secondary,
                            },
                        }}
                        onClick={handleTooltipOpen}
                    >
                        <EmailIcon sx={{color:'text.primary'}} />
                    </IconButton> 
                </Tooltip>
            </ClickAwayListener>
            <IconButton color='inherit' href="https://github.com/johnsony0" target="_blank" rel="noopener noreferrer"
                sx={{ 
                    '&:hover .MuiSvgIcon-root': {
                        color: theme.palette.text.secondary,
                    },
                }}
            >
                <GitHubIcon sx={{color: 'text.primary'}} />
            </IconButton>
            <IconButton color='inherit' href="https://www.linkedin.com/in/johnson-yang-b0303b205/" target="_blank" rel="noopener noreferrer"
                sx={{ 
                    '&:hover .MuiSvgIcon-root': {
                        color: theme.palette.text.secondary,
                    },
                }}
            >
                <LinkedInIcon sx={{color: 'text.primary'}} />
            </IconButton>
            <IconButton color='inherit' href="https://www.instagram.com/johnson.yang/" target="_blank" rel="noopener noreferrer"
                sx={{ 
                    '&:hover .MuiSvgIcon-root': {
                        color: theme.palette.text.secondary,
                    },
                }}
            >
                <InstagramIcon sx={{ color: 'text.primary'}} />
            </IconButton>
        </Box>
    )
}

export default Footer;