import React, { useState } from 'react';
import { 
  Box, Button, Paper, Typography, Dialog, DialogTitle, 
  DialogContent, DialogActions, Stack, Divider, Tooltip, Chip, IconButton,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';

const AltGridVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [gridN, setGridN] = useState(0);
  const [startNode, setStartNode] = useState(null);
  const [goalNode, setGoalNode] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [weightCount, setWeightCount] = useState(0);

  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const GridLegend = () => {    
    return (
      <Paper elevation={2} sx={{ p: 2, bgcolor: '#1a1a1a', border: '1px solid #333', width: 220 }}>
        <Typography variant="subtitle2" sx={{ color: '#90caf9', mb: 2, fontWeight: 'bold' }}>
          Map Legend
        </Typography>
        
        <Stack spacing={1.5}>
          {/* State Indicators */}
          <LegendItem color="#000" label="Obstacle / Wall" />
          <LegendItem color="#1b5e20" label="Start Position" />
          <LegendItem color="#b71c1c" label="Goal Position" />
          <LegendItem color="#ff8f00" label="Final Path" />
          <LegendItem color="#0d47a1" label="Open (Exploring)" />
          <LegendItem color="#37474f" label="Closed (Checked)" />

          <Divider sx={{ bgcolor: '#333', my: 1 }} />

          {/* Weight Gradient */}
          <Typography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>
            Terrain Weight (Cost)
          </Typography>
          <Box sx={{ 
            height: 12, 
            borderRadius: 1, 
            background: 'linear-gradient(to right, hsl(210, 10%, 35%), hsl(210, 10%, 10%))',
            border: '1px solid #444'
          }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontSize: '0.65rem', color: '#aaa' }}>Weight 0</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#aaa' }}>Weight 15</Typography>
          </Stack>
        </Stack>
      </Paper>
    );
  };

  // Helper for the list items
  const LegendItem = ({ color, label }) => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ width: 14, height: 14, bgcolor: color, borderRadius: 0.5, border: '1px solid rgba(255,255,255,0.2)' }} />
      <Typography sx={{ fontSize: '0.75rem', color: '#ccc' }}>{label}</Typography>
    </Stack>
  );

  const parseHexFile = (text) => {
    const lines = text.trim().split('\n').filter(l => l.length > 0);
    const sqrt = Math.sqrt(lines.length);
    if (!Number.isInteger(sqrt)) {
      setErrorMessage(`Invalid memory depth (${lines.length}). Grid must be square.`);
      setErrorOpen(true);
      return;
    }
    setGridN(sqrt);
    setNodes(lines.map((hex, index) => {
      const val = parseInt(hex, 16);
      return {
        id: index,
        i: Math.floor(index / sqrt),
        j: index % sqrt,
        isObstacle: (val & 0x1) === 1,
        inClosed: ((val >> 1) & 0x1) === 1,
        inOpen: ((val >> 2) & 0x1) === 1,
        parentRef: (val >> 3) & 0x7,
        weight: (val >> 6) & 0xF, 
        g: Infinity, 
        f: Infinity,
        isPath: false
      };
    }));
    setStartNode(null);
    setGoalNode(null);
  };

  const handleCellClick = (id) => {
    if (isRunning || nodes[id].isObstacle) return;
    if (startNode === null) setStartNode(id);
    else if (goalNode === null && id !== startNode) setGoalNode(id);
    else { setStartNode(id); setGoalNode(null); }
  };

  const runAStar = async () => {
    if (startNode === null || goalNode === null) return;
    setIsRunning(true);
    let grid = nodes.map(n => ({ ...n, inOpen: false, inClosed: false, isPath: false, g: Infinity, f: Infinity }));
    let openList = [startNode];
    let weightTotal = 0;
    grid[startNode].g = 0;
    grid[startNode].f = calculateH(startNode, gridN, goalNode);
    grid[startNode].inOpen = true;

    while (openList.length > 0) {
      console.table(
        openList.map(idx => ({
          node: idx,
          coord: `(${Math.floor(idx / gridN)}, ${idx % gridN})`, // Row, Col
          f: grid[idx].f,
          g: grid[idx].g,
          weight: grid[idx].weight
        }))
      );
      openList.sort((a, b) => grid[a].f - grid[b].f);
      let currentIdx = openList.shift();
      if (currentIdx === goalNode) break;
      console.log(`(${Math.floor(currentIdx / gridN)}, ${currentIdx % gridN})`)
      grid[currentIdx].inOpen = false;
      grid[currentIdx].inClosed = true;

      for (let neighborIdx of getNeighbors(currentIdx, gridN)) {
        let neighbor = grid[neighborIdx];
        if (neighbor.isObstacle || neighbor.inClosed) continue;
        let tentG = grid[currentIdx].g + 1 + grid[currentIdx].weight;
        if (tentG < neighbor.g) {
          neighbor.parentRef = currentIdx;
          neighbor.g = tentG;
          neighbor.f = tentG + calculateH(neighborIdx, gridN, goalNode);
          if (!neighbor.inOpen) { neighbor.inOpen = true; openList.push(neighborIdx); }
        }
      }
      setNodes([...grid]);
      await new Promise(r => setTimeout(r, 50)); 
    }
    
    let curr = goalNode;
    let node_length = 0;
    while (curr !== null && grid[curr].parentRef !== null) {
      console.log(curr)
      grid[curr].isPath = true;
      node_length += 1;
      weightTotal += grid[curr].weight + 1;
      curr = grid[curr].parentRef;
      if (curr === startNode) { grid[curr].isPath = true; break; }
    }
    setWeightCount(weightTotal);
    setCount(node_length-1);
    setNodes([...grid]);
    setIsRunning(false);
  };

  const calculateH = (a, N, b) => Math.abs(Math.floor(a/N) - Math.floor(b/N)) + Math.abs((a%N) - (b%N));
  const getNeighbors = (idx, N) => {
    const i = Math.floor(idx / N), j = idx % N, res = [];
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
      if (di === 0 && dj === 0) continue;
      let ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < N && nj >= 0 && nj < N) res.push(ni * N + nj);
    }
    return res;
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a0a0a', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Professional Toolbar */}
      <Paper elevation={4} sx={{ p: 2, bgcolor: '#1a1a1a', borderRadius: 0, borderBottom: '1px solid #333' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1, color: '#90caf9', mr: 2 }}>
              A* Simulation
            </Typography>
            
            <Button variant="contained" size="small" startIcon={<UploadFileIcon />} component="label">
              Load Map
              <input type="file" hidden onChange={(e) => {
                const reader = new FileReader();
                reader.onload = (ev) => parseHexFile(ev.target.result);
                reader.readAsText(e.target.files[0]);
              }} />
            </Button>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#444' }} />

            <Button variant="contained" color="success" size="small" startIcon={<PlayArrowIcon />} 
              onClick={runAStar} disabled={goalNode === null || isRunning}>
              Execute
            </Button>

            <Button variant="outlined" color="warning" size="small" startIcon={<RestartAltIcon />} 
              onClick={() => {setStartNode(null); setGoalNode(null); setNodes(nodes.map(n => ({...n, inOpen: false, inClosed: false, isPath: false, g: Infinity, f: Infinity})))}}>
              Reset
            </Button>

            <IconButton color="error" size="small" onClick={() => {setNodes([]); setGridN(0); setStartNode(null); setGoalNode(null);}}>
              <DeleteSweepIcon />
            </IconButton>
            
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#444' }} />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold', letterSpacing: 1, color: '#ac2d6d', mr: 2 }}>
              Solution: {count} nodes long, {count+1} movement cost, {weightCount-count-1} weight cost
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Chip 
              icon={<LocationOnIcon style={{ color: '#4caf50' }} />} 
              label={startNode !== null ? `Start: [${nodes[startNode].i},${nodes[startNode].j}]` : "Start: Not Set"} 
              variant="outlined" size="small" sx={{ color: '#fff', borderColor: '#333' }} 
            />
            <Chip 
              icon={<FlagIcon style={{ color: '#f44336' }} />} 
              label={goalNode !== null ? `Goal: [${nodes[goalNode].i},${nodes[goalNode].j}]` : "Goal: Not Set"} 
              variant="outlined" size="small" sx={{ color: '#fff', borderColor: '#333' }} 
            />
          </Stack>

        </Stack>
      </Paper>

      <Box sx={{ flexGrow: 1, p: 4, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflow: 'auto' }}>
        {nodes.length > 0 ? (
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${gridN}, 60px)`, 
            gap: '2px', 
            p: 1.5, bgcolor: '#222', borderRadius: '8px', border: '1px solid #444',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}>
            {nodes.map((node) => {
              const isStart = node.id === startNode;
              const isGoal = node.id === goalNode;
              const weightFactor = (node.weight || 0) * 1.8; 
              let bg = `hsl(210, 10%, ${35 - weightFactor}%)`; 

              if (node.isObstacle) bg = '#000';
              else if (isStart) bg = '#1b5e20';
              else if (isGoal) bg = '#b71c1c';
              else if (node.isPath) bg = '#ff8f00';
              else if (node.inClosed) bg = '#37474f';
              else if (node.inOpen) bg = '#0d47a1';

              return (
                <Tooltip 
                  key={node.id} 
                  title={`Coord: (${node.i}, ${node.j}) | Weight: ${node.weight} | F: ${node.f === Infinity ? 'INF' : node.f}`} 
                  disableInteractive
                >
                  <Box
                    onClick={() => handleCellClick(node.id)}
                    sx={{
                      width: 60, height: 60, bgcolor: bg,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      cursor: node.isObstacle ? 'not-allowed' : 'pointer',
                      border: '1px solid rgba(255,255,255,0.05)',
                      outline: isStart || isGoal ? '2px solid #fff' : 'none',
                      outlineOffset: '-2px',
                      transition: 'all 0.1s ease',
                      '&:hover': { transform: 'scale(1.1)', zIndex: 10, filter: 'brightness(1.2)' }
                    }}
                  >
                    {/* Show Weight if it's not an obstacle */}
                    {!node.isObstacle && (
                      <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', mb: 0.5 }}>
                        W: {node.weight}
                      </Typography>
                    )}
                    
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#fff' }}>
                      {node.f === Infinity ? '' : `F:${node.f}`}
                    </Typography>
                    
                    <Typography sx={{ fontSize: '0.4rem', opacity: 0.6, color: '#fff' }}>
                        {node.isObstacle ? 'WALL' : `[${node.i},${node.j}]`}
                    </Typography>
                  </Box>
                </Tooltip>
              );
            })}
            <GridLegend/>
          </Box>
        ) : (
          <Stack alignItems="center" sx={{ mt: 10 }}>
             <Typography variant="h5" sx={{ color: '#444', fontWeight: 'bold' }}>Awaiting Memory Initialization...</Typography>
             <Typography variant="caption" sx={{ color: '#333' }}>Upload .HEX to map grid coordinates</Typography>
          </Stack>
        )}
      </Box>

      {/* Error Handling */}
      <Dialog open={errorOpen} onClose={() => setErrorOpen(false)} PaperProps={{ sx: { bgcolor: '#1a1a1a', color: '#fff', border: '1px solid #d32f2f' } }}>
        <DialogTitle color="error">Format Violation</DialogTitle>
        <DialogContent>{errorMessage}</DialogContent>
        <DialogActions><Button onClick={() => setErrorOpen(false)} sx={{ color: '#90caf9' }}>Acknowledge</Button></DialogActions>
      </Dialog>
    </Box>
  );
};

export default AltGridVisualizer;