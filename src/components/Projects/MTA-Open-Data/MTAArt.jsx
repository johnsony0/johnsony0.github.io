import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { NavBar } from "./MTAutils";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { IconButton, Tooltip, Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText,Button,Link} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InfoIcon from '@mui/icons-material/Info';

export const Art = ({ artData, setPage, nextPage, prevPage }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (artData.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * artData.length));
    }
  }, [artData]);

  const threshold = 100;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(163, 24, 24) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(46, 171, 24) 0%, rgb(0, 128, 0) 100%)"
  ]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > threshold) {
      setShowInfo(true);  
    } else if (info.offset.x < -threshold) {
      setShowInfo(false); 
      setCurrentIndex(Math.floor(Math.random() * artData.length)); 
    }
    controls.start({ x: 0 });  
  };

  const currentImage = artData[currentIndex];  

  if (artData.length === 0 || currentIndex === null) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading art...</Typography>
      </Box>
    );
  } 

  const handleClose = () => {
    setShowInfo(false);
  };

  const handleNext = () => {
    setShowInfo(false); 
    setCurrentIndex(Math.floor(Math.random() * artData.length)); 
  }

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(!tooltipOpen);
  };


  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh', 
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip 
          arrow
          open={tooltipOpen}
          onClose={handleTooltipClose}
          disableFocusListener
          disableHoverListener
          disableTouchListener 
          title={`Swipe left to see a different piece.
            Swipe right for more info on the current piece.
            Some pieces do not have an image associated, if
            they do not load within a couple seconds, swipe left.
            `}
          sx={{
            position: 'absolute'
          }}
        >
          <IconButton onClick={handleTooltipOpen}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
      <motion.div 
      style={{
      background,
      width: '100%',
      height: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}
      >
        <motion.img
          loading='lazy'
          src={currentImage?.art_image_src} 
          alt={currentImage?.art_title}  
          style={{ 
            x,
            background: 'white',
            borderRadius: '30px',
            width: '60vw',
            height: '60vw',
            maxHeight: '70vh',
            alignItems: 'center',
            objectFit: 'cover',
          }}
          onDragEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        />
      </motion.div>
      <Dialog onClose={handleNext} open={showInfo}>
        <DialogTitle>
          {currentImage?.art_title}, {currentImage?.art_date}
          <div>
            <Typography variant="subtitle1" sx={{ color: 'gray' }}>
              By {currentImage?.artist}
            </Typography>
            <Typography variant="caption" sx={{ color: 'gray' }}>
              Found at <strong>{currentImage?.station_name}</strong> with <strong>{currentImage?.line}</strong> line(s)
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>Material:</strong> {currentImage?.art_material}
          </DialogContentText>
          <DialogContentText>
            <strong>Description:</strong> {currentImage?.art_description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link 
            href={`https://www.google.com/maps/dir/?api=1&destination=${currentImage.latitude},${currentImage.longitude}`}
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ fontSize: '0.75rem', color: 'blue' }}
          >
            Directions
          </Link>
          <Link 
            href={currentImage?.art_image_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ fontSize: '0.75rem', color: 'blue' }}
          >
            Learn More
          </Link>
          <Button 
            onClick={handleClose} 
            variant="outlined" 
            sx={{ color: 'black', borderColor: 'black' }}  
          >
            Close
          </Button>
          <Button 
            onClick={handleNext} 
            variant="outlined" 
            sx={{ color: 'black', borderColor: 'black' }} 
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage}/>
    </Box>
    
  );
};