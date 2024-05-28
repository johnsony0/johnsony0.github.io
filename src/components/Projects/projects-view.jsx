import * as React from 'react';
import { Box, Container, Tooltip, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Link } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { projectData } from './ProjectData.jsx';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';

function Projects() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMd = useMediaQuery(theme.breakpoints.down('md')); 
  const isLg = useMediaQuery(theme.breakpoints.down('lg')); 

  const getColumns = () => {
    if (isSm) return 1;
    if (isMd) return 2;
    if (isLg) return 3;
    return 4;
};

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };


  return (
    <Container
    sx={{
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <ImageList cols={getColumns()} rowHeight={164} gap={15}>
        {projectData.map((item) => (
          <Tooltip 
          key={item.img} 
          title={
            <React.Fragment>
              <div><strong>{item.title}</strong></div>
              <div>{item.date}</div>
              <div>{item.description}</div>
            </React.Fragment>
          }
          placement="bottom"
          >
          <ImageListItem
          key={item.img}
          onClick={() => handleClickOpen(item)}
          sx={{
            cursor: 'pointer',
            border: '2px solid #ccc',
            margin: '5px',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative',
            overflow: 'hidden', 
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit:'contain' }}
          />
          <Typography
            variant='caption'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            {item.title}
            <br />
            {item.date}
          </Typography>
        </ImageListItem>
        </Tooltip>
        ))}
      </ImageList>

      {selectedProject && (
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center', marginRight:'5%'}}>
            <DialogTitle>
              {selectedProject.title}
            </DialogTitle>
            <Typography>
              {selectedProject.date}
            </Typography>
          </Box>
          
          <DialogContent>
            <DialogContentText sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign:'center'}}>
                <Typography sx={{marginBottom:'7%', fontWeight:'lighter'}}>
                  {selectedProject.description}
                </Typography>
                <Box sx={{marginBottom: '7%'}}>
                  {selectedProject.tools.map((tool, index) => (
                  <Typography
                    key={index}
                    component="span"
                    sx={{
                      border: '1px solid #ccc',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      margin: '4px',
                      fontWeight: '600'
                    }}
                  >
                    {tool}
                  </Typography>
                  ))}
                </Box>
                <Box>
                  {selectedProject.github && (
                    <Link href={selectedProject.github} target="_blank" rel="noopener"  color="inherit">
                      <GitHubIcon />
                    </Link>
                  )}
                  {selectedProject.video && (
                    <Link href={selectedProject.video}  target="_blank"  rel="noopener" color="inherit" >
                      <YouTubeIcon />
                    </Link>
                  )}
                  {selectedProject.docs && (
                    <Link href={selectedProject.docs} target="_blank" rel="noopener"  color="inherit">
                      <DescriptionIcon />
                    </Link>
                  )}
                </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='inherit' onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
}

export default Projects;