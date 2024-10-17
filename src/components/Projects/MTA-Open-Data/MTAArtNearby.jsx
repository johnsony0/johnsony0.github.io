import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Grid } from "@mui/material"
import { NavBar } from "./MTAutils";
import {CitySelect, CountrySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export const ArtNearby = ({setPage, nextPage, prevPage}) => {
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState({id: 233, name: 'United States', iso3: 'USA', iso2: 'US', numeric_code: '840', phone_code: 1, region: 'Americas', subregion: 'North America', tld: '.us'});
  const [state, setState] = useState({id: 1452, name: 'New York', state_code: 'NY'});
  const [city, setCity] = useState(0);
  const [zip, setZip] = useState(null);

  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const apiKey = process.env.REACT_APP_GOOGLE_GEOCODING_KEY; 
  const getCoordinates = async () => {
    /*try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
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
    }*/
    const formattedAddress = `${address}, ${city.name}, ${state.name} ${zip}, ${country.name}`;
    const encodedAddress = encodeURIComponent(formattedAddress)
    console.log(encodedAddress)
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
        maxWidth={'500px'}
        sx={{
          height: '95vh',
          my: 5,
          mx: 5,
        }}
      >
        <Grid
          container
          spacing={3} 
          sx={{
            justifyContent: 'center', 
            alignItems: 'center',     
          }}
        >
          <Grid item xs={12}>
            <Typography gutterBottom>Address</Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}> 
            <Typography gutterBottom>Country</Typography>
            <CountrySelect
              defaultValue={country}
              onChange={(e) => setCountry(e)}
              placeHolder="Select Country"
              fullWidth 
            />
          </Grid>
    
          <Grid item xs={6}>
            <Typography gutterBottom>State</Typography>
            <StateSelect
              defaultValue={state}
              countryid={country.id}
              onChange={(e) => setState(e)}
              placeHolder="Select State"
              fullWidth
            />
          </Grid>
    
          <Grid item xs={6}>
            <Typography gutterBottom>City</Typography>
            <CitySelect
              countryid={country.id}
              stateid={state.id}
              onChange={(e) => setCity(e)}
              placeHolder="Select City"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Zip Code</Typography>
            <TextField
              onChange={(e) => setZip(e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              placeholder='e.g. 11111'
              error={zip.length < 5 && zip.length > 0 ? true : false}
              helperText={zip.length < 5 && zip.length > 0 ? "Please enter valid Zip Code" : ""}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: 'black',
                borderColor: 'black',
                mt: 2, 
              }}
              onClick={getCoordinates}
            >
              Find Nearest Art
            </Button>
          </Grid>
        </Grid>
        </Box>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage} />
    </Box>
  );
}