import React, { useEffect, useState } from 'react'; 
import { Box } from "@mui/material";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON  } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { NavBar } from './MTAutils';

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

const lineColorMapping = {
  "1" : "#ee352e",
  "2" : "#ee352e",
  "3" : "#ee352e",
  "A" : "#0039a6",
  "C" : "#0039a6",
  "E" : "#0039a6",
  "B" : "#ff6319",
  "D" : "#ff6319",
  "F" : "#ff6319",
  "M" : "#ff6319",
  "G" : "#6cbe45",
  "L" : "#a7a9ac",
  "J" : "#996633",
  "Z" : "#996633",
  "N" : "#fccc0a",
  "Q" : "#fccc0a",
  "R" : "#fccc0a",
  "W" : "#fccc0a",
  "4" : "#00933c",
  "5" : "#00933c",
  "6" : "#00933c",
  "7" : "#b933ad",
  "T" : "#00add0",
  "S" : "#808183"
}

const ArtMarkers = ({ artData }) => {
  return (
    <MarkerClusterGroup>
      {artData.map((art, index) => (
        <Marker key={index} position={[art.latitude, art.longitude]}>
          <Popup>
            <div>
              <h3><em>{art.art_title}, {art.art_date}</em></h3>
              <h5>By {art.artist}</h5> 
              <img 
                src={art.art_image_src}
                alt={art.art_title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }} 
              />
              <p>Found at <strong>{art.station_name}</strong>  with <strong>{art.line}</strong> line(s)</p>
              <p><strong>Material:</strong> {art.art_material}</p> 
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${art.latitude},${art.longitude}`}
                target="_blank"
                rel="noopener noreferrer" 
                style={{ textDecoration: 'underline' }} 
              >
                Directions
              </a>
              <br />
              <a 
                href={art.art_image_link} 
                target="_blank"
                rel="noopener noreferrer" 
                style={{ textDecoration: 'underline' }} 
              >
                Learn More
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

export const ArtMap = ({ artData, setPage, nextPage, prevPage }) => {
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

  const subwayLineStyle = (feature) => {
    const lineId = feature.properties.rt_symbol
    const color = lineColorMapping[lineId] || "#F5F5DC"

    return{
      color: color,
      weight: 3,
      opacity: 0.8,
    }
  };

  const onEachFeature = (feature, layer) => {
    const lineName = feature.properties.name; 

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
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage}/>
    </Box>
  );
};