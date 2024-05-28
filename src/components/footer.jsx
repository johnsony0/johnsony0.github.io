import { Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){
    return(
        <Box sx={{ display: 'flex' , height:'32px', alignContent:'center', justifyContent:'center'}}>
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
    )
}

export default Footer;