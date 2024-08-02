import { Autocomplete, TextField, Grid, Button, Box, Typography } from '@mui/material';
import { SwapHoriz } from '@mui/icons-material';
import { teams,champions, regions, elos, game_modes, versions} from './DraftData';

function DraftForm({ formData, swapTeams, handleParameterChange, handleTeamChange, onSubmit, loading, error }){

  const createAutocomplete = (label,value,options,index, disable, helper) => {
    return(
      <Grid item xs={3}>
        <Autocomplete
          disableClearable={disable}
          value={value}
          onChange={(event, newValue) => handleParameterChange(index, newValue)}
          options={options.map(option => option.label)}
          isOptionEqualToValue={(option, value) => (value === '' || option === value)}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={helper}
              label={label}
              variant="outlined"
              placeholder={`Select ${label}`}
              sx={{
                color: 'rgba(0,0,0,1)',
                '& .MuiFormHelperText-root': {
                  marginTop: '1px',
                  color: 'rgba(0, 0, 0, 0.6)'
                },
                '& .MuiInputBase-input': {
                  color: 'black' 
                },
                '& .MuiInputLabel-root': {
                  fontWeight: '700'  
                }
              }}
            />
          )}
        />
      </Grid>
    )
  }

  const createChampionAutocomplete = (team,value,index) => {
    return (
      <Autocomplete
        disableClearable
        key={team+index}
        value={value}
        onChange={(event, newValue) => handleTeamChange(team, index, newValue)}
        options={champions.map(champion => champion.label)}
        getOptionDisabled={(option) => formData[team].includes(option)}
        groupBy={(option) => option[0]}
        isOptionEqualToValue={(option, value) => (value === '' || option === value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Select Champion"
            sx={{
              marginBottom: 1,
              '& .MuiInputBase-input': {
                color: 'black' 
              }
            }}
          />
        )}
      />
    )
  }

  return (
    <Box>
        <Grid container spacing={2} sx={{marginBottom: 2, px:2, marginTop: 1}}>
          {createAutocomplete('Region', formData.region, regions, 'region', true)}
          {createAutocomplete('Game Modes', formData.game_mode, game_modes, 'game_mode', true)}
          {createAutocomplete('Rank', formData.elo, elos, 'elo', true)}
          {createAutocomplete('Version', formData.version, versions, 'version', true)}
          {createAutocomplete('Champion', formData.champion, champions, 'champion', false,'optional')}
          {createAutocomplete('Team',formData.team, teams,'team',false,'optional')}
          <Grid item xs={3}>
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
              sx={{
                marginBottom: 1,
                '& .MuiInputBase-input': {
                  color: 'black' 
                },
                '& .MuiInputLabel-root': {
                  fontWeight: '700'
                }
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={swapTeams}
              fullWidth
              variant='contained'
              startIcon={<SwapHoriz/>}
              sx={{
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <b>Swap Teams</b>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{fontWeight:'700'}}>
              Blue Team
            </Typography>
            {formData.blue_team.map((value, index) => (
              createChampionAutocomplete('blue_team',value,index)
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{fontWeight:'700'}}>
              Red Team
            </Typography>
            {formData.red_team.map((value, index) => (
              createChampionAutocomplete('red_team',value,index)
            ))}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="inherit" onClick={onSubmit} disabled={loading || error} fullWidth>
                {loading ? 'Loading' : (error ? 'Error' : 'Submit')}
            </Button>
          </Grid>
        </Grid >
    </Box>
  );
}

export default DraftForm