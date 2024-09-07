import { useEffect, useState } from 'react';
import { FormControl, FormLabel, Box, Typography, Button, TextField } from "@mui/material";
import { runModel } from './BiasUtils.jsx';

function MediaBias() {
  const [loading, setLoading] = useState(false); 
  const [bias, setBias] = useState([])
  const seed = '42'

  const onSubmit = () => {
    setLoading(true)
    const text = data.get('text')
    prediction = runModel(text,seed)
    setLoading(true)
    setBias(prediction)
  }

  return(
    <Box>
      <FormControl>
        <FormLabel htmlFor="text">Text</FormLabel>
        <TextField
          id="text"
          type="text"
          name="text"
          placeholder="Twitter or Facebook post goes here :D"
          multiline
          row={4}
          variant='filled'
          fullwidth
        />
      </FormControl>
      <Button type="submit" variant="contained" color="inherit" onClick={onSubmit} disabled={loading} fullWidth>
          {loading ? 'Loading' : 'Determine Bias'}
      </Button>
      <Typography>
        {bias}
      </Typography>
    </Box>
  )
}

export default MediaBias;