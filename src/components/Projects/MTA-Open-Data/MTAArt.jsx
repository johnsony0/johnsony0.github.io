import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { NavBar, useFetchData } from "./MTAutils";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { IconButton, Tooltip, Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText,Button,Link} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export const Art = ({ setPage, nextPage, prevPage }) => {
  const [artData, setArtData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const controls = useAnimation();

  useFetchData(setArtData);  

  useEffect(() => {
    if (artData.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * artData.length));
    }
  }, [artData]);

  const threshold = 100;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
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

  const handleClose = () => {
    setShowInfo(false);
  };

  const handleNext = () => {
    setShowInfo(false); 
    setCurrentIndex(Math.floor(Math.random() * artData.length)); 
  }

  if (artData.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading art...</Typography>
      </Box>
    );
  } 

  console.log(currentIndex)

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh', 
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      }}
    >
      <Tooltip 
      title={`Swipe left to see a different piece.
        Swipe right for more info on the current piece.
        `}
      sx={{
        position: 'absolute'
      }}
      >
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <motion.div 
      style={{
      background,
      width: '100vw',
      height: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}
      >
        <motion.img
          src={currentImage?.art_image_src} 
          alt={currentImage?.art_title}  
          style={{ 
            x,
            background: 'white',
            borderRadius: '30px',
            width: '300px',
            height: '300px',
            alignItems: 'center',
            objectFit: 'cover',
          }}
          onDragEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        />
      </motion.div>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage}/>
      <Dialog onClose={handleNext} open={showInfo}>
        <DialogTitle>
          {currentImage?.art_title}, {currentImage?.art_date}
          <Typography variant="subtitle1" sx={{ color: 'gray' }}>
            By {currentImage?.artist}
          </Typography>
          <Typography variant="caption" sx={{ color: 'gray' }}>
            Found at {currentImage?.station_name} with {currentImage?.line} line(s)
          </Typography>
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
    </Box>
  );
};