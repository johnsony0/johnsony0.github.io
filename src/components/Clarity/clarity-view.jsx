import React, { useState } from 'react';
import { Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Paper } from '@mui/material'
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
    description: "Clarity minimize distractions through hiding elements that encourage more clicking and scrolling such as suggestions or comments.",
    image: ss2
  },
  {
    name: "Promote Less Scrolling",
    description: "We promote less scrolling through restricting how far you can scroll, or adding limits to how many posts you can view.",
    image: ss3
  },
  {
    name: "Reduce Clutter on Pages",
    description: "Pages are often cluttered with navigation tools, trending pages or friend suggestions, which we can help remove, so you can focus on posts and not on peripherals.",
    image: ss4
  },
  {
    name: "Take Control of Your Feed",
    description: "Control what you see, hide posts that match your keywords/terms or politically biased posts.",
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
    <Paper elevation={2} square={false} sx={{ height: 'calc(100vh - 60px - 160px)', margin: '20px', backgroundColor: 'whitesmoke'}}>
      <Grid container spacing={0}>
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
    </Paper>
  );
}

export default Clarity;