import { useEffect, useState } from 'react';
import { Typography } from "@mui/material";
import { convertTextToVector } from './BiasUtils.jsx';

function MediaBias() {
  const [vector, setVector] = useState([]); 
  const seed = '42'
  useEffect(() => {
    const fetchData = async () => {
      const result = await convertTextToVector("hello world",seed);
      console.log(result); 
      setVector(result);
    };

    fetchData(); 
  }, []);
  return(
    <Typography>hello world</Typography>
  )
}

export default MediaBias;