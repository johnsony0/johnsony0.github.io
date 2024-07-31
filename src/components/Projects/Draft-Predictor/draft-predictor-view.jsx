import React, {useState} from 'react';
import * as yup from 'yup';
import { Autocomplete, TextField, Grid, Button, Box } from '@mui/material';
import { labelToValueMap, arrayToValueMap, FindSimilarGame, runModel} from './DraftUtils'
import {champions, regions, elos, game_modes, versions} from './DraftData';

//add region, elo, gamemode, patch, threshold
function DraftPredictior(){
  const schema = yup.object().shape({
    blue_team: yup.array()
      .of(yup.string().required('Champion is required'))
      .min(5, 'Must select 5 champions')
      .required('Red team is required'),
    red_team: yup.array()
      .of(yup.string().required('Champion is required'))
      .min(5, 'Must select 5 champions')
      .required('Red team is required'),
    region: yup.string().required('Region is required'),
    game_mode: yup.string().required('Game mode is required'),
    elo: yup.string().required('Elo is required'),
    version: yup.string().required('Version is required'),
    threshold: yup.number().min(1).max(10).required('Threshold is required')
  });

  const [formData, setFormData] = useState({
    blue_team: ['Garen', 'Xin Zhao', 'Lux', 'Jinx', 'Milio'],
    red_team:  ['Urgot', 'FiddleSticks', 'Vladimir', 'Caitlyn', 'Bard'],
    region: regions[0].label,
    game_mode: game_modes[0].label,
    elo: elos[0].label,
    version: versions[0].label,
    threshold: 5
  });

  const handleParameterChange = (parameter,newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [parameter] : newValue
    }));
  }

  const handleTeamChange = (team, index, newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [team]: prevFormData[team].map((item, i) => (i === index ? newValue || '' : item))
    }));
  };

  const onSubmit = async (e) => {
    schema.validate(formData)
    const mapped_data = {
      blue_team : arrayToValueMap(champions,formData.blue_team),
      red_team : arrayToValueMap(champions,formData.red_team),
      region : labelToValueMap(regions,formData.region),
      game_mode : labelToValueMap(game_modes,formData.game_mode),
      elo : labelToValueMap(elos,formData.elo),
      version : labelToValueMap(versions,formData.version),
      threshold: formData.threshold
    }
    FindSimilarGame(mapped_data)
    const response = await runModel(e,mapped_data)
    console.log(response)
  }

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
            <Button type="submit" variant="contained" color="primary" onClick={onSubmit} fullWidth>
                Submit
            </Button>
          </Grid>
        </Grid >
    </Box>
  );
}

export default DraftPredictior