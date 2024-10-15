import { Box, Grid, Typography, Button } from "@mui/material"

export const ArtSimilar = ({setPage}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh', 
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Similar Art
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
          fullWidth
          color="inherit"
          variant="contained"
          onClick={() => setPage('View Art Map')}
          >
            View Art Map
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
          fullWidth
          color="inherit"
          variant="contained"
          onClick={() => setPage('Explore Art Nearby')}
          >
            Explore Art Nearby
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}