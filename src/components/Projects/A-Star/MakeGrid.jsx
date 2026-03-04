import React, { useState, useEffect } from 'react';
import { 
  Box, Button, Paper, Typography, 
  Dialog, DialogTitle, DialogContent, DialogActions,
  Stack
} from '@mui/material';

const HexGridVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [gridN, setGridN] = useState(0);
  const [startNode, setStartNode] = useState(null); // ID of start
  const [goalNode, setGoalNode] = useState(null);   // ID of goal
  
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCloseError = () => setErrorOpen(false);

  const parseHexFile = (text) => {
    const lines = text.trim().split('\n').filter(l => l.length > 0);
    const count = lines.length;
    const sqrt = Math.sqrt(count);

    if (!Number.isInteger(sqrt)) {
      setErrorMessage(`Invalid length: ${count}. Needs perfect square.`);
      setErrorOpen(true);
      return;
    }

    const N = sqrt;
    setGridN(N);

    const parsed = lines.map((hex, index) => {
      const val = parseInt(hex, 16);
      return {
        id: index,
        i: Math.floor(index / N),
        j: index % N,
        isObstacle: (val & 0x1) === 1,
        inClosed: false, 
        inOpen: false,  
        parentRef: null,
        g: Infinity,
        f: Infinity,
      };
    });
    setNodes(parsed);
  };

  const handleCellClick = (id) => {
    if (nodes[id].isObstacle) return;
    if (startNode === null) setStartNode(id);
    else if (goalNode === null && id !== startNode) setGoalNode(id);
    else {
      setStartNode(id);
      setGoalNode(null);
    }
  };

  const clearSearch = () => {
    setStartNode(null);
    setGoalNode(null);
    setNodes(nodes.map(node => ({
      ...node,
      inClosed: false,
      inOpen: false,
      g: Infinity,
      f: Infinity,
      parentRef: null
    })));
  };

  const fullReset = () => {
    setNodes([]);
    setGridN(0);
    setStartNode(null);
    setGoalNode(null);
  };

  const runAStar = async () => {
    if (startNode === null || goalNode === null) return;

    let grid = [...nodes];
    let openList = [startNode];
    
    grid[startNode].g = 0;
    grid[startNode].f = calculateH(startNode, goalNode);
    grid[startNode].inOpen = true;

    while (openList.length > 0) {
      // Sort to get lowest F
      openList.sort((a, b) => grid[a].f - grid[b].f);
      let currentIdx = openList.shift();
      let current = grid[currentIdx];

      if (currentIdx === goalNode) break;

      current.inOpen = false;
      current.inClosed = true;

      // Neighbors (8-way)
      const neighbors = getNeighbors(currentIdx, gridN);
      for (let neighborIdx of neighbors) {
        let neighbor = grid[neighborIdx];
        if (neighbor.isObstacle || neighbor.inClosed) continue;

        let tentG = current.g + 1; 
        if (tentG < neighbor.g) {
          neighbor.parentRef = currentIdx;
          neighbor.g = tentG;
          neighbor.f = tentG + calculateH(neighborIdx, goalNode);
          if (!neighbor.inOpen) {
            neighbor.inOpen = true;
            openList.push(neighborIdx);
          }
        }
      }
      setNodes([...grid]);
      await new Promise(r => setTimeout(r, 100)); 
    }
  };

  const calculateH = (a, b) => {
    const nodeA = { i: Math.floor(a / gridN), j: a % gridN };
    const nodeB = { i: Math.floor(b / gridN), j: b % gridN };
    return Math.abs(nodeA.i - nodeB.i) + Math.abs(nodeA.j - nodeB.j);
  };

  const getNeighbors = (idx, N) => {
    const i = Math.floor(idx / N);
    const j = idx % N;
    let res = [];
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        if (di === 0 && dj === 0) continue;
        let ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < N && nj >= 0 && nj < N) res.push(ni * N + nj);
      }
    }
    return res;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>A* Hardware Simulation</Typography>
      
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button variant="contained" component="label">
          Upload Hex
          <input type="file" hidden onChange={(e) => {
            const reader = new FileReader();
            reader.onload = (ev) => parseHexFile(ev.target.result);
            reader.readAsText(e.target.files[0]);
          }} />
        </Button>
        <Button variant="outlined" color="success" onClick={runAStar} disabled={goalNode === null}>
          Run A* Search
        </Button>
        <Button variant="outlined" color="warning" onClick={clearSearch}>
          Clear Search
        </Button>

        <Button variant="outlined" color="error" onClick={fullReset}>
          Full Reset
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {startNode === null ? "📍 Set Start" : 
             goalNode === null ? "🏁 Set Goal" : "🚀 Ready to Search"}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${gridN}, 70px)`, 
        gap: '4px',
        bgcolor: '#f0f0f0', p: 2, borderRadius: 2, width: 'fit-content'
      }}>
        {nodes.map((node) => {
          const isStart = node.id === startNode;
          const isGoal = node.id === goalNode;
          
          return (
            <Paper
              key={node.id}
              onClick={() => handleCellClick(node.id)}
              elevation={isStart || isGoal ? 8 : 1}
              sx={{
                width: 70, height: 70,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                bgcolor: node.isObstacle ? '#333' : 
                         isStart ? '#4caf50' : 
                         isGoal ? '#f44336' : 
                         node.inClosed ? '#bdbdbd' :
                         node.inOpen ? '#90caf9' : 'white',
                color: (node.isObstacle || isStart || isGoal) ? 'white' : 'black',
                border: isStart || isGoal ? '2px solid black' : '1px solid #ccc',
                transition: 'all 0.2s'
              }}
            >
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 'bold' }}>
                {node.f === Infinity ? '∞' : `F:${node.f}`}
              </Typography>
              <Typography sx={{ fontSize: '0.55rem' }}>G:{node.g === Infinity ? '∞' : node.g}</Typography>
              <Box sx={{ mt: 0.5, px: 0.5, bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 1 }}>
                <Typography sx={{ fontSize: '0.5rem' }}>[{node.i},{node.j}]</Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
      <Dialog open={errorOpen} onClose={handleCloseError}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>{errorMessage}</DialogContent>
        <DialogActions><Button onClick={handleCloseError}>OK</Button></DialogActions>
      </Dialog>
    </Box>
  );
};

export default HexGridVisualizer;