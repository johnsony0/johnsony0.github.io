import { useState } from 'react';
import { Box, Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { runModel, checkText } from './BiasUtils.jsx';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip} from 'recharts'
import {Clear} from '@mui/icons-material';

//next steps: adding gibberish detection + political speech detection (if its not really political, it can't be a left or right), then give an option to submit anyways

function MediaBias() {
  const [loading, setLoading] = useState(false)
  const [bias, setBias] = useState([])
  const [inputText, setInputText] = useState('')
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const COLORS = ['#0088FE', 'grey', 'red'];

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  const onClear = () => {
    setInputText('')
    setBias('')
  }

  const onSubmit = async() => {
    setLoading(true)
    const error = checkText(inputText)
    if (error){
      setErrorMessage(error);
      setOpenErrorDialog(true);
    } else {
      const prediction = await runModel(inputText)
      const transformedValues = prediction.map(value => Math.round(value * 100));
      const data = [
        { name: "left", value: transformedValues[0] },    
        { name: "center", value: transformedValues[2] },  
        { name: "right", value: transformedValues[1] },  
      ];
      console.log(prediction)
      setBias(data)
    }
    setLoading(false)
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
                <Box sx={{ display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3
                  }}>
                  <IconButton onClick={onClear}>
                    <Clear />
                  </IconButton>
                </Box>
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
        <RechartsTooltip />
      </PieChart>
    }
    <Dialog
        open={openErrorDialog}
        onClose={handleCloseErrorDialog}
        aria-labelledby="error-dialog-title"
        aria-describedby="error-dialog-description"
      >
        <DialogTitle id="error-dialog-title"><b>Error</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="error-dialog-description">
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog} color="inherit" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MediaBias;