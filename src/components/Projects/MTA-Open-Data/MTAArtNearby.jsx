import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material"
import { NavBar, haversineDistance } from "./MTAutils";
import { useMediaQuery, useTheme, Link, IconButton, Tooltip, ImageList, ImageListItem,ImageListItemBar  } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import InfoIcon from '@mui/icons-material/Info';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Autocomplete from "react-google-autocomplete";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export const ArtNearby = ({artData, setPage, nextPage, prevPage}) => {
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const [sortedList, setSortedList] = useState([])
  const [openTooltip, setOpenTooltip] = useState(null);

  const apiKey = process.env.REACT_APP_GOOGLE_GEOCODING_KEY; 

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); 
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg')); 

  let cols = 1;
  if (isXs) cols = 1;
  else if (isSm) cols = 2;
  else if (isMd) cols = 3;
  else if (isLg) cols = 4;

  const getCoordinates = (place) => {
    const place_lat = place.geometry.location.lat();
    const place_lng = place.geometry.location.lng();
    setCoordinates({ lat: place_lat, lng: place_lng });
  };

  const removeCoordinates = () => {
    setCoordinates({ lat: '', lng: '' })
  }

  useEffect(() => {
    const distanceData = artData.map((item) => ({
      ...item,
      distance: haversineDistance(coordinates.lat, coordinates.lng, item.latitude, item.longitude),
    }))
    const sortedArtData = distanceData.sort((a, b) => a.distance - b.distance);

    setSortedList(sortedArtData)
  }, [coordinates, artData]);

  const handleTooltipOpen = (tooltipId) => {
    setOpenTooltip((prev) => (prev === tooltipId ? null : tooltipId));
  };
  
  const handleTooltipClose = () => {
    setOpenTooltip(null); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '95vh',
        }}
        
      >
        {(coordinates.lat === '' || coordinates.lng === '') ? (
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Box>
                <Autocomplete
                  apiKey={apiKey}
                  onPlaceSelected={(place) => {getCoordinates(place)}}
                  placeholder="Enter location..."
                  style={{ width: '50vw', height: '40px' }}
                  options={{
                    types: ["address"],
                    componentRestrictions: { country: "us" },
                  }}
                />
                <Tooltip
                  arrow
                  open={openTooltip === 'info'}
                  onClose={handleTooltipClose}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={`Enter a location and we will display all the
                    MTA artworks sorted by closest to farthest from that location.
                    After submitting a location, if you wish to reset the location
                    click the reset button at the top left.`}
                >
                  <IconButton onClick={() => handleTooltipOpen('info')}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  open={openTooltip === 'data'}
                  onClose={handleTooltipClose}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={`This website does not have a database, therefore I 
                    (the developer) will never see your input, HOWEVER, this 
                    form uses Google APIs so they will see your entries. 
                    Use this tool if you trust Google with your data.`}
                >
                  <Typography onClick={() => handleTooltipOpen('data')}
                    sx={{
                      fontSize: '12px',
                      cursor: 'pointer',          
                      textDecoration: 'underline',
                      color: 'grey',      
                      '&:hover': {
                        color: 'primary.dark',    
                      },
                    }}
                    >
                    How Your Data Is Protected.
                  </Typography>
                </Tooltip>
              </Box>
            </ClickAwayListener>
        ) : (sortedList.length < artData.length) ? (
          <CircularProgress/>
        ) : (
          <Box>
            <IconButton onClick={removeCoordinates}>
              <RestartAltIcon />
            </IconButton>
            <ImageList
              cols={cols}
              sx={{
                height: '90vh',
                width: '90vw',
                margin: 0,
                padding: 0,
                overflowY: 'auto',
                scrollbarWidth: 'none', 
                '&::-webkit-scrollbar': {
                  display: 'none', 
                },
              }}
            >
              {sortedList.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={item.art_image_src}
                    alt={item.art_title}
                    loading="lazy"
                  />
                <ImageListItemBar
                  title={`${item.art_title}, ${item.art_date} - ${item.artist}`}
                  subtitle={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Link
                          href={`https://www.google.com/maps/place/${item.latitude},${item.longitude}/@${item.latitude},${item.longitude},16z/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ marginRight: 1, color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          Location
                        </Link>
                        <Link
                          href={`https://www.google.com/maps/dir/${coordinates.lat},${coordinates.lng}/${item.latitude},${item.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ marginRight: 1, color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          Direction
                        </Link>
                        <Link
                          href={item.art_image_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ marginRight: 1, color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          Learn More
                        </Link>
                      </Box>
                      <Typography variant='caption'>
                        {Math.round(item.distance * 62.1371) / 100} mi
                      </Typography>
                    </Box>
                  }
                />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
      </Box>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage} />
    </Box>
  );
}