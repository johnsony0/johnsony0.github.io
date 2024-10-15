import { Box, Grid, Typography, Button } from "@mui/material"

export const ArtNearby = ({setPage}) => {
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
            Art Nearby
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
          fullWidth
          color="inherit"
          variant="contained"
          onClick={() => setPage('Display Similar Art')}
          >
            Display Similar Art
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
          fullWidth
          variant="contained"
          color="inherit"
          onClick={() => setPage('View Art Map')}
          >
            View Art Map
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}