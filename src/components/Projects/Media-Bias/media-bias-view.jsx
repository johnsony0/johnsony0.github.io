import { useState } from 'react';
import { Grid, Box, Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { runModel } from './BiasUtils.jsx';
import { PieChart, Pie, Cell, Tooltip} from 'recharts'
import ClearIcon from '@mui/icons-material/Clear';

function MediaBias() {
  const [loading, setLoading] = useState(false)
  const [bias, setBias] = useState([])
  const [inputText, setInputText] = useState('')
  const COLORS = ['#0088FE', 'grey', 'red'];

  const onSubmit = async() => {
    setLoading(true)
    const prediction = await runModel(inputText)
    const transformedValues = prediction.map(value => Math.round(value * 100));
    const data = [
      { name: "left", value: transformedValues[0] },    
      { name: "center", value: transformedValues[2] },  
      { name: "right", value: transformedValues[1] },  
    ];
    console.log(prediction)
    setBias(data)
    setLoading(false)
  }

  const onClear = () => {
    setInputText('')
    setBias('')
  }

  return(
    <Box 
    height='calc(100vh - 64px - 32px)'
    sx={{
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    >
      <Box
        sx={{ 
        width: '95%',
        maxWidth: '800px',
        mx: 2,
        my: 5,
      }}
      >
        <TextField
          id="text"
          type="text"
          name="text"
          placeholder="Twitter or Facebook post goes here :D"
          multiline
          row={4}
          maxRows={6}
          minRows={6}
          fullWidth
          variant='filled'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{
            my: 5,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onClear}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button 
        type="submit"
        variant="contained" 
        color="inherit" 
        onClick={onSubmit} 
        disabled={loading} 
        fullWidth
        sx={{
          mb: 1,
        }}
        >
            {loading ? 'Loading' : 'Determine Bias'}
        </Button>
      </Box>
    {bias &&
      <PieChart width={200} height={200}>
        <Pie
          data={bias}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {bias.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    }
    </Box>
  )
}

export default MediaBias;