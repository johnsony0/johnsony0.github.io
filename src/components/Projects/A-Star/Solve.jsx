import React, { useState } from 'react';
import { 
  Box, Button, Paper, Typography, Stack, Divider, Card, Alert, TextField 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FastAStarSolver = () => {
  const [results, setResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mhz, setMhz] = useState(100); // Default 100MHz

  const solvePath = async (text) => {
    setIsProcessing(true);
    setResults(null); // Clear previous

    const lines = text.trim().split('\n').filter(l => l.length > 0);
    const N = Math.round(Math.sqrt(lines.length));
    const totalNodes = N * N;

    const isObstacle = new Uint8Array(totalNodes);
    const weights = new Uint8Array(totalNodes);
    const gScore = new Float32Array(totalNodes).fill(Infinity);
    const fScore = new Float32Array(totalNodes).fill(Infinity);
    const parent = new Int32Array(totalNodes).fill(-1);
    const closedSet = new Uint8Array(totalNodes);
    
    lines.forEach((hex, idx) => {
      const val = parseInt(hex, 16);
      isObstacle[idx] = (val & 0x1);           // Bit 0
      // inClosed = (val >> 1) & 0x1;         // Bit 1 (HW state)
      // inOpen = (val >> 2) & 0x1;           // Bit 2 (HW state)
      // parentRef = (val >> 3) & 0x7;        // Bits 3-5 (HW state)
      weights[idx] = (val >> 6) & 0xF;        // Bits 6-9 (Weight)
    });

    const start = 0;
    const goal = totalNodes - 1;

    const startTime = performance.now();
    let openSet = [start];
    gScore[start] = 0;
    fScore[start] = heuristic(0, 0, N - 1, N - 1);

    let solved = false;
    let nodesExplored = 0;

    while (openSet.length > 0) {
      // Find lowest F score
      let minIdx = 0;
      for (let i = 1; i < openSet.length; i++) {
        if (fScore[openSet[i]] < fScore[openSet[minIdx]]) minIdx = i;
      }
      
      const current = openSet.splice(minIdx, 1)[0];
      nodesExplored++;

      if (current === goal) {
        solved = true;
        break;
      }

      closedSet[current] = 1;

      const ci = Math.floor(current / N);
      const cj = current % N;

      // 8-way connectivity
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di === 0 && dj === 0) continue;
          
          const ni = ci + di;
          const nj = cj + dj;

          if (ni >= 0 && ni < N && nj >= 0 && nj < N) {
            const neighbor = ni * N + nj;
            if (isObstacle[neighbor] || closedSet[neighbor]) continue;

            // NEW COST LOGIC: Base cost (1) + Terrain Weight
            const movementCost = 1 + weights[neighbor];
            const tentativeG = gScore[current] + movementCost;

            if (tentativeG < gScore[neighbor]) {
              parent[neighbor] = current;
              gScore[neighbor] = tentativeG;
              fScore[neighbor] = tentativeG + heuristic(ni, nj, N - 1, N - 1);
              
              if (!openSet.includes(neighbor)) {
                openSet.push(neighbor);
              }
            }
          }
        }
      }
    }

    const endTime = performance.now();
    const durationMs = endTime - startTime;

    if (solved) {
      const path = [];
      let curr = goal;
      let totalWeightCost = 0;
      let totalMovementCost = 0;
      while (curr !== -1) {
        path.push(curr);
        const p = parent[curr];
        if (p !== -1) {
          totalWeightCost += weights[p];
          totalMovementCost += 1; 
        }
        curr = p;
      }
      setResults({
        success: true,
        time: durationMs.toFixed(3),
        cycles: Math.floor((durationMs / 1000) * (mhz * 1e6)),
        length: path.length, // Total nodes in path
        stepCount: totalMovementCost, // Number of edges
        weightCost: totalWeightCost,
        totalCost: totalWeightCost + totalMovementCost,
        explored: nodesExplored,
        gridN: N,
        path: path.reverse()
      });
    } else {
      setResults({
        success: false,
        time: durationMs.toFixed(3),
        explored: nodesExplored,
        gridN: N
      });
    }
    setIsProcessing(false);
  };

  const heuristic = (i, j, gi, gj) => Math.abs(i - gi) + Math.abs(j - gj);

  return (
    <Box sx={{ p: 4, bgcolor: '#0f0f0f', minHeight: '100vh', color: '#eee' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#90caf9', fontWeight: 'bold' }}>
          A* HW/SW Analysis Tool
        </Typography>
        <TextField 
          label="Clock Freq (MHz)" 
          type="number" 
          value={mhz} 
          onChange={(e) => setMhz(e.target.value)}
          size="small"
          sx={{ bgcolor: '#fff', borderRadius: 1, width: 150 }}
        />
      </Stack>
      
      <Paper sx={{ p: 3, bgcolor: '#1e1e1e', mb: 3, border: '1px dashed #444' }}>
        <Button variant="contained" startIcon={<UploadFileIcon />} component="label" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Load Memory Hex"}
          <input type="file" hidden onChange={(e) => {
            const reader = new FileReader();
            reader.onload = (ev) => solvePath(ev.target.result);
            reader.readAsText(e.target.files[0]);
          }} />
        </Button>
      </Paper>

      {results && (
        <Stack spacing={3}>
          {!results.success && (
            <Alert severity="error" sx={{ bgcolor: '#2c0b0b', color: '#ffcdd2', border: '1px solid #d32f2f' }}>
              <strong>NO SOLUTION FOUND:</strong> Goal is unreachable from start. Searched {results.explored} nodes in {results.time}ms.
            </Alert>
          )}

          {results.success && (
            <>
              <Card sx={{ p: 3, bgcolor: '#1b5e20', color: '#fff' }}>
                <Typography variant="h6">Success: Path Reconstructed</Typography>
                <Divider sx={{ my: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
                
                <Stack direction="row" spacing={4} sx={{ mt: 2, flexWrap: 'wrap', gap: 2 }}>
                  <Box>
                    <Typography variant="caption" color="#a5d6a7">TOTAL PATH COST</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                      {results.totalCost}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      ({results.stepCount} steps + {results.weightCost} weight)
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="#a5d6a7">EST. HW CYCLES</Typography>
                    <Typography variant="h5">{results.cycles.toLocaleString()}</Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="#a5d6a7">NODES EXPLORED</Typography>
                    <Typography variant="h5">{results.explored}</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" color="#a5d6a7">SW LATENCY</Typography>
                    <Typography variant="h5">{results.time} ms</Typography>
                  </Box>
                </Stack>
              </Card>

              <Card sx={{ p: 3, bgcolor: '#252525', color: '#fff' }}>
                <Typography variant="h6" gutterBottom>Path Detail ({results.length - 2} nodes)</Typography>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', color: '#81c784', wordBreak: 'break-all' }}>
                  {results.path.map(idx => `(${Math.floor(idx/results.gridN)},${idx%results.gridN})`).join(' → ')}
                </Typography>
              </Card>
            </>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default FastAStarSolver;