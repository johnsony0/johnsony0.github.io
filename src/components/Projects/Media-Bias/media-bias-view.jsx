import { useState } from 'react';
import { FormControl, FormLabel, Box, Typography, Button, TextField } from "@mui/material";
import { runModel } from './BiasUtils.jsx';

function MediaBias() {
  const [loading, setLoading] = useState(false)
  const [bias, setBias] = useState([])
  const [inputText, setInputText] = useState("The former director of Project 2025 is sharply criticizing Donald Trump’s campaign, accusing its two top advisers of a series of missteps, lack of preparation and overconfidence that he says have jeopardized Trump’s chances in November.")
  const seed = '42'

  const onSubmit = async() => {
    setLoading(true)
    const prediction = await runModel(inputText,seed)
    setLoading(false)
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
          defaultValue={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </FormControl>
      <Button type="submit" variant="contained" color="inherit" onClick={onSubmit} disabled={loading} fullWidth>
          {loading ? 'Loading' : 'Determine Bias'}
      </Button>
      <Typography>
        {bias && bias.join(", ")}
      </Typography>
    </Box>
  )
}

export default MediaBias;