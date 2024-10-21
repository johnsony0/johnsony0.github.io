import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material"
import { NavBar, AddressForm, haversineDistance } from "./MTAutils";
import { useMediaQuery, useTheme, Link } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';

export const ArtNearby = ({artData, setPage, nextPage, prevPage}) => {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState({id: 233, name: 'United States', iso3: 'USA', iso2: 'US', numeric_code: '840', phone_code: 1, region: 'Americas', subregion: 'North America', tld: '.us'});
  const [state, setState] = useState({id: 1452, name: 'New York', state_code: 'NY'});
  const [city, setCity] = useState(0);
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState({
    address: false,
    country: false,
    state: false,
    city: false,
    zip: false,
  });

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

  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const [sortedList, setSortedList] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_GEOCODING_KEY; 
  const getCoordinates = async (e) => {
    e.preventDefault();
    const formattedAddress = `${address}, ${city.name}, ${state.name} ${zip}, ${country.name}`;
    if(!validateForm()){
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(formattedAddress)}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.status === 'OK') {
          const location = data.results[0].geometry.location;
          setCoordinates({ lat: location.lat, lng: location.lng });
        } else {
          console.error('Geocoding error:', data.error_message);
        }
      } catch (error) {
        console.error('Failed to fetch coordinates:', error);
      }
    }
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = { address: false, country: false, state: false, city: false, zip: false};
    if (!address) {
      newErrors.address = true;
      hasErrors = true;
    }
    if (!country) {
      newErrors.country = true;
      hasErrors = true;
    }
    if (!state) {
      newErrors.state = true;
      hasErrors = true;
    }
    if (!city) {
      newErrors.city = true;
      hasErrors = true;
    }
    if (zip.length !== 5) {
      newErrors.zip = true;
      hasErrors = true;
    }
    setErrors(newErrors);
    return hasErrors;
  };

  useEffect(() => {
    const distanceData = artData.map((item) => ({
      ...item,
      distance: haversineDistance(coordinates.lat, coordinates.lng, item.latitude, item.longitude),
    }))
    const sortedArtData = distanceData.sort((a, b) => a.distance - b.distance);

    setSortedList(sortedArtData)
  }, [coordinates]);

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
        maxWidth={'500px'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '95vh',
          my: 5,
          mx: 5,
        }}
        
      >
        {(coordinates.lat === '' || coordinates.lng === '') ? (
        <AddressForm getCoordinates={getCoordinates} country={country} state={state} setAddress={setAddress} setCountry={setCountry} setState={setState} setCity={setCity} setZip={setZip} errors={errors}/>
        )  : (
          <ImageList
            cols={cols}
            sx={{
              height: '80vh',
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
                  <div>
                    <Link
                      href={item.art_image_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ marginRight: 1, color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Learn More
                    </Link>
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
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Direction
                    </Link>
                  </div>
                }
              />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage} />
    </Box>
  );
}