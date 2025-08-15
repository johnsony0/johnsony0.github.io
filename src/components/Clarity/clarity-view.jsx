import React, { useState } from 'react';
import { Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ss1 from '../../assets/clarity/screenshot-1.png';
import ss2 from '../../assets/clarity/screenshot-2.png';
import ss3 from '../../assets/clarity/screenshot-3.png';
import ss4 from '../../assets/clarity/screenshot-4.png';
import ss5 from '../../assets/clarity/screenshot-5.png';

const items = [
  {
    name: "Change How You Use Social Media",
    description: "xyz",
    image: ss1
  },
  {
    name: "Minimize Distractions",
    description: "xyzz",
    image: ss2
  },
  {
    name: "Promote Less Scrolling",
    description: "xyzzz",
    image: ss3
  },
  {
    name: "Reduce Clutter on Pages",
    description: "xyzzzz",
    image: ss4
  },
  {
    name: "Take Control of Your Feed",
    description: "xyzzzzz",
    image: ss5
  }
];

function Item(props) {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        component="img"
        alt={props.item.name}
        src={props.item.image}
        sx={{
          display: 'block',
          height: '80%',
          width: '80%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}

function Clarity() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Grid container spacing={0} sx={{ height: 'calc(100vh - 60px - 120px)' }}>
      <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 2, sm: 4, md: 6 }}}>
        <Box
          sx={{
            width: '100%', 
            height: '100%',
          }}
        >
          <Carousel
            autoPlay={true}
            interval={10000}
            animation="slide"
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            swipe={true}
            duration={600}
            indicators={true}
            onChange={(newIndex) => setSlideIndex(newIndex)}
            sx={{
              height: '100%',
              '& .Carousel-slide': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              },
              '& .MuiButtonBase-root.MuiIconButton-root:first-of-type': {
                marginLeft: theme.spacing(1),
              },
              '& .MuiButtonBase-root.MuiIconButton-root:last-of-type': {
                marginRight: theme.spacing(1),
              },
            }}
          >
            {items.map((item, i) => <Item key={i} item={item} />)}
          </Carousel>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: 'center', md: 'left' }, 
            color: theme.palette.text.primary,
          }}
        >
          {items[slideIndex].description} 
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Clarity;