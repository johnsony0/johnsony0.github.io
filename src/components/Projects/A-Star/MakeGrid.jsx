import React, { useState } from 'react';
import { 
  Box, Button, Paper, Typography, 
  Dialog, DialogTitle, DialogContent, DialogActions 
} from '@mui/material';

const HexGridVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [gridN, setGridN] = useState(0);

  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCloseError = () => setErrorOpen(false);

  const parseHexFile = (text) => {
    const lines = text.trim().split('\n');
    const count = lines.length;
    const sqrt = Math.sqrt(count);
    const parsedNodes = lines.map((hex, index) => {
    // Convert Hex to BigInt to handle bitwise operations
    const val = parseInt(hex, 16);

    if (!Number.isInteger(sqrt)) {
      setErrorMessage(`Invalid file length: ${count} entries. A perfect square is required (e.g., 16, 64, 256).`);
      setErrorOpen(true);
      return;
    }

    const N = sqrt;
    setGridN(N);

    return {
      id: index,
      x: index % N, 
      y: Math.floor(index / N),
      isObstacle: (val & 0x1) === 1,
      inClosed: ((val >> 1) & 0x1) === 1,
      inOpen: ((val >> 2) & 0x1) === 1,
      parentRef: (val >> 3) & 0x7,
      g: (val >> 6) & 0xFF,
      f: (val >> 14) & 0xFF,
    };
    });
    setNodes(parsedNodes);
  };



  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => parseHexFile(event.target.result);
    reader.readAsText(file);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>A* Hardware Memory Visualizer</Typography>
      
      <Button variant="contained" component="label" sx={{ mb: 3 }}>
        Upload mem_init.hex
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${gridN}, 60px)`, 
        gap: 1,
        bgcolor: '#f5f5f5',
        p: 2,
        borderRadius: 2
      }}>
        {nodes.map((node) => (
          <Paper
            key={node.id}
            elevation={3}
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: node.isObstacle ? '#333' : node.inOpen ? '#90caf9' : 'white',
              color: node.isObstacle ? 'white' : 'black',
              fontSize: '0.7rem',
              border: '1px solid #ccc'
            }}
          >
            {node.isObstacle ? 'WALL' : (
              <>
                <div>F:{node.f}</div>
                <div>G:{node.g}</div>
                <div style={{fontSize: '0.5rem'}}>P:{node.parentRef}</div>
              </>
            )}
          </Paper>
        ))}
      </Box>

      <Dialog open={errorOpen} onClose={handleCloseError}>
        <DialogTitle sx={{ color: 'error.main' }}>File Format Error</DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseError} variant="contained" color="primary">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HexGridVisualizer;