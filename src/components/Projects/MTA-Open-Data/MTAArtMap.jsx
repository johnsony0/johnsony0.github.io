import React, { useEffect, useState } from 'react'; 
import { Box, Button } from "@mui/material";
import Papa from 'papaparse';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON  } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const startPosition = [40.7128, -73.91875];

const ArtMarkers = ({ artData }) => {
  return (
    <MarkerClusterGroup>
      {artData.map((art, index) => (
        <Marker key={index} position={[art.latitude, art.longitude]}>
          <Popup>
            <div>
              <h3>{art.art_title}</h3>
              <img 
                src={art.art_image_src}
                alt={art.art_title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }} 
              />
              <p>Artist: {art.artist}</p>
              <p>Agency: {art.agency}</p>
              <p>Art Date: {art.art_date}</p>
              <p>Material: {art.art_material}</p>
              <p>
                More Info: 
                <a 
                  href={art.art_image_link} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'underline' }} 
                >
                  {art.art_image_link}
                </a>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

export const ArtMap = ({ setPage }) => {
  const [artData, setArtData] = useState([]);
  const file_path = `${process.env.PUBLIC_URL}/mta_art.csv`;
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/SubwayLines.geojson`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGeojsonData(data);
      } catch (error) {
        console.error('Error loading GeoJSON data:', error);
      }
    };

    fetchGeoJSON();
  }, []);

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

  useEffect(() => {
    fetchData();
  },); 

  const subwayLineStyle = {
    color: "#FF0000",
    weight: 3,
    opacity: 0.8,
  };

  const onEachFeature = (feature, layer) => {
    const lineName = feature.properties.line_name; 

    layer.on('click', () => {
      layer.bindPopup(`<strong>Line:</strong> ${lineName}`).openPopup();
    });
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', 
      }}
    >
      <MapContainer center={startPosition} zoom={12} style={{ height: "95vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geojsonData && (
          <GeoJSON data={geojsonData} style={subwayLineStyle} onEachFeature={onEachFeature}/>
        )}
        <ArtMarkers artData={artData} />
      </MapContainer>
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          bottom: 0, 
          height: '5vh', 
          width: '100%', 
        }}
      >
        <Button
          sx={{ width: '50%' }} 
          color="inherit"
          variant="contained"
          onClick={() => setPage('Display Similar Art')}
        >
          Display Similar Art
        </Button>
        <Button
          sx={{ width: '50%' }} 
          color="inherit"
          variant="contained"
          onClick={() => setPage('Explore Art Nearby')}
        >
          Explore Art Nearby
        </Button>
      </Box>
    </Box>
  );
};