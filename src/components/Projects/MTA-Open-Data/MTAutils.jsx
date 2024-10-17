import React, { useEffect } from 'react'; 
import Papa from 'papaparse';
import { Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

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