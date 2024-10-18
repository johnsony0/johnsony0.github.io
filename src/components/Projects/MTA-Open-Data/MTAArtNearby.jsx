import React, { useState } from 'react';
import { Box } from "@mui/material"
import { NavBar, AddressForm } from "./MTAutils";

export const ArtNearby = ({setPage, nextPage, prevPage}) => {
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

  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const apiKey = process.env.REACT_APP_GOOGLE_GEOCODING_KEY; 
  const getCoordinates = async (e) => {
    e.preventDefault();
    if(!validateForm()){
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
    if (zip.length != 5) {
      newErrors.zip = true;
      hasErrors = true;
    }
    setErrors(newErrors);
    return hasErrors;
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
        <AddressForm getCoordinates={getCoordinates} country={country} state={state} setAddress={setAddress} setCountry={setCountry} setState={setState} setCity={setCity} setZip={setZip} errors={errors}/>
      </Box>
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage} />
    </Box>
  );
}