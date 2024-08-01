import { Autocomplete, TextField, Grid, Button, Box, Typography } from '@mui/material';
import {champions, regions, elos, game_modes, versions} from './DraftData';

function DraftForm({ formData, handleParameterChange, handleTeamChange, onSubmit, loading }){
  
  const createAutocomplete = (label,value,options,index) => {
    return(
      <Grid item xs={12/5}>
        <Autocomplete
          disableClearable
          value={value}
          onChange={(event, newValue) => handleParameterChange(index, newValue)}
          options={options.map(option => option.label)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              placeholder={`Select ${label}`}
            />
          )}
        />
      </Grid>
    )
  }

  return (
    <Box>
        <Grid container spacing={2} sx={{marginBottom: 2, px:2, marginTop: 1}}>
          {createAutocomplete('Region', formData.region, regions, 'region')}
          {createAutocomplete('Game Modes', formData.game_mode, game_modes, 'game_mode')}
          {createAutocomplete('Rank', formData.elo, elos, 'elo')}
          {createAutocomplete('Version', formData.version, versions, 'version')}
          <Grid item xs={12/5}>
            <TextField
              fullWidth
              label="Threshold"
              variant="outlined"
              type="number"
              value={formData.threshold}
              onChange={(event) => handleParameterChange('threshold',event.target.value)}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              error={formData.threshold > 10 || formData.threshold < 1}
              helperText={(formData.threshold > 10 || formData.threshold < 1) ? 'Num btwn 1-10' : ''}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Blue Team
            </Typography>
            {formData.blue_team.map((value, index) => (
              <Autocomplete
                disableClearable
                key={`blue_team_${index + 1}`}
                value={value}
                onChange={(event, newValue) => handleTeamChange('blue_team', index, newValue)}
                options={champions.map(champion => champion.label)}
                getOptionDisabled={(option) => formData.blue_team.includes(option)}
                groupBy={(option) => option[0]}
                isOptionEqualToValue={(option, value) => (value === '' || option === value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select Champion"
                    sx={{ marginBottom: 1 }}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Red Team
            </Typography>
            {formData.red_team.map((value, index) => (
              <Autocomplete
                disableClearable
                key={`red_team_${index + 1}`}
                value={value}
                onChange={(event, newValue) => handleTeamChange('red_team', index, newValue)}
                options={champions.map(champion => champion.label)}
                getOptionDisabled={(option) => formData.red_team.includes(option)}
                groupBy={(option) => option[0]}
                isOptionEqualToValue={(option, value) => (value === '' || option === value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select Champion"
                    sx={{ marginBottom: 1 }}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={onSubmit} disabled={loading} fullWidth>
                {loading ? 'Loading' : 'Submit'}
            </Button>
          </Grid>
        </Grid >
    </Box>
  );
}

export default DraftForm