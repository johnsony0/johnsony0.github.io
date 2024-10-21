import React, { useEffect } from 'react'; 
import Papa from 'papaparse';
import HomeIcon from '@mui/icons-material/Home';
import {CitySelect, CountrySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { Typography, TextField, Box, Button, Grid, FormControl, FormHelperText } from "@mui/material"

export const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180); 
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

export const AddressForm = ({getCoordinates, country, state, setAddress, setCountry, setState, setCity, setZip, errors}) => {
  return(
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
          id="address-line1" 
          name="address-line1"
          autoComplete='address-line1'
          fullWidth
          variant="outlined"
          size="small"
          placeholder='e.g. 123 Lane Drive'
          onChange={(e) => setAddress(e.target.value)}
          error={errors.address}
          helperText={errors.address ? "Please enter an Address" : ""}
        />
      </Grid>
        <Grid item xs={6}> 
          <FormControl fullWidth error={errors.country} required>
            <Typography gutterBottom>Country</Typography>
            <CountrySelect
              defaultValue={country}
              onChange={(e) => setCountry(e)}
              placeHolder="Select Country"
            />
            <FormHelperText>
              {errors.country ? "Please select a Country" : ""}
            </FormHelperText>
          </FormControl>
        </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth error={errors.state} required>
          <Typography gutterBottom>State</Typography>
          <StateSelect
            defaultValue={state}
            countryid={country.id}
            onChange={(e) => setState(e)}
            placeHolder="Select State"
          />
          <FormHelperText>
            {errors.state ? "Please select a State" : ""}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth error={errors.city} required>
          <Typography gutterBottom>City</Typography>
          <CitySelect
            countryid={country.id}
            stateid={state.id}
            onChange={(e) => setCity(e)}
            placeHolder="Select City"
          />
          <FormHelperText>
            {errors.city ? "Please select a City" : ""}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom>Zip Code</Typography>
        <TextField
          onChange={(e) => setZip(e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          type="number"
          id="zip" 
          name="zip"
          autoComplete='postal-code'
          placeholder='e.g. 11111'
          error={errors.zip}
          helperText={errors.zip ? "Please enter valid Zip Code" : ""}
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
  )
}

export const useFetchData = (setArtData) => {
  const file_path = `${process.env.PUBLIC_URL}/mta_art.csv`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file_path);
        const csvData = await response.text();
    
        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            const parsedData = results.data.map(row => {
              let imageUrl = null
              if (row.art_image_link === ''){
                imageUrl = null
              } else  {
                const parsedLink  = JSON.parse(row.art_image_link.replace(/'/g, '"'));
                imageUrl = parsedLink.url ? parsedLink.url : null;
              }
              return {
                id: row.id,
                agency: row.agency,
                station_name: row.station_name,
                line: row.line,
                artist: row.artist,
                art_title: row.art_title,
                art_date: row.art_date,
                art_material: row.art_material,
                art_description: row.art_description,
                art_image_link: imageUrl, 
                art_image_src: row.image_src,
                latitude: parseFloat(row.latitude),
                longitude: parseFloat(row.longitude),
              };
            });
            setArtData(parsedData);
            console.log('All data loaded', parsedData);
          },
          error: (err) => {
            console.error('Error loading data:', err);
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[file_path,setArtData]); 
}

export const NavBar = ({ setPage, nextPage, prevPage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '5vh', 
        width: '100%'
      }}
    >
      <Button
        sx={{ 
          width: '33%',
          '&::after': { 
            content: '""',
            width: '3px',  
            height: '70%', 
            backgroundColor: 'black',
            position: 'absolute',
            right: 0,
            top: '15%',  
          }
        }} 
        color="inherit"
        onClick={() => setPage(prevPage)}
      >
        {prevPage}
      </Button>

      <Button
        sx={{ width: '33%' }} 
        color="inherit"
        onClick={() => setPage('Home')}
      >
        <HomeIcon />
      </Button>

      <Button
        sx={{ 
          width: '33%',
          '&::before': { 
            content: '""',
            width: '3px',  
            height: '70%', 
            backgroundColor: 'black',
            position: 'absolute',
            left: 0,
            top: '15%',  
          }
        }} 
        color="inherit"
        onClick={() => setPage(nextPage)}
      >
        {nextPage}
      </Button>
    </Box>
  );
}