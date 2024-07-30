import React, {useState} from 'react';
import * as ort from 'onnxruntime-web';
import * as yup from 'yup';
import { Autocomplete, TextField, Grid, Button, Box } from '@mui/material';
import { champions, regions, elos, game_modes, versions, encodeTeam } from './DraftData';

//add region, elo, gamemode, patch, threshold
function DraftPredictior(){
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

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
  });

  const [formData, setFormData] = useState({
    blue_team: ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar'],
    red_team: ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar'],
    region: regions[0].label,
    game_mode: game_modes[0].label,
    elo: elos[0].label,
    version: versions[0].label
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

  const runModel = async (e) => {
    e.preventDefault()
    console.log(formData)

    const errors = await schema.validate(formData)
    console.log(errors)

    const blue_team = encodeTeam(formData.blue_team)
    const red_team = encodeTeam(formData.red_team)

    const model_path = `${process.env.PUBLIC_URL}/models/NA1_ARAM_ANY_14-13_nn_model.onnx`
    const session = await ort.InferenceSession.create(model_path);

    const data = Float32Array.from([...blue_team,...red_team])
    const tensor_data = new ort.Tensor('float32',data,[1,2,168])
    const feeds = {input: tensor_data}

    const results = await session.run(feeds)
    console.log(results.output.data)
  }

  const createAutocomplete = (label,value,options,index) => {
    return(
      <Grid item xs={3}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => handleParameterChange(index, newValue)}
          options={options.map(option => option.label)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              placeholder={`Select ${label}`}
              sx={{ marginTop: 2 }}
              error={value === null}
              helperText={value === null ? 'This field must be filled' : ''}
            />
          )}
        />
      </Grid>
    )
  }

  return (
    <Box>
        <Grid container spacing={2} sx={{marginBottom: 2, px:2}}>
          {createAutocomplete('Region', formData.region, regions, 'region')}
          {createAutocomplete('Game Modes', formData.game_mode, game_modes, 'game_mode')}
          {createAutocomplete('Rank', formData.elo, elos, 'elo')}
          {createAutocomplete('Version', formData.version, versions, 'version')}
          <Grid item xs={6}>
            {formData.blue_team.map((value, index) => (
              <Autocomplete
                fullWidth
                required
                key={`blue_team_${index + 1}`}
                value={value}
                onChange={(event, newValue) => handleTeamChange('blue_team', index, newValue)}
                options={champions.map(champion => champion.label)}
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
                fullWidth
                key={`red_team_${index + 1}`}
                value={value}
                onChange={(event, newValue) => handleTeamChange('red_team', index, newValue)}
                options={champions.map(champion => champion.label)}
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
            <Button type="submit" variant="contained" color="primary" onClick={runModel} fullWidth
            
            >
                Submit
            </Button>
          </Grid>
        </Grid >
    </Box>
  );
}

export default DraftPredictior