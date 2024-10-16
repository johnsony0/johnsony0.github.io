//import { useState } from "react";
import { Box } from "@mui/material"
//import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { NavBar } from "./MTAutils";

export const ArtNearby = ({setPage, nextPage, prevPage}) => {
  //const [coords,setCoords] = useState([null,null])
  /*const handlePlaceSelected = (place) => {
    console.log('Selected Place:', place);

    if (place.geometry) {
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      setCoords([latitude, longitude]);
    }
  };*/
  //console.log(coords)
  //console.log(process.env.GOOGLE_MAP_API_KEY)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '95vh', 
      }}
    >
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage}/>
    </Box>
  )
}