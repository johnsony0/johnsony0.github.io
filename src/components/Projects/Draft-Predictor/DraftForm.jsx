import React, {useState} from 'react'
import { ClickAwayListener, Tooltip,Autocomplete, TextField, Grid, Button, Box, Typography } from '@mui/material';
import { SwapHoriz, Info } from '@mui/icons-material';
import { champions, regions, elos, game_modes, versions} from './DraftData';
import { FocusTrap } from '@mui/base/FocusTrap';

function DraftForm({ formData, swapTeams, handleParameterChange, handleTeamChange, onSubmit, loading }){
  const [openDialog, setOpenDialog] = useState(false);

  const handleTooltipClose = () => {
    setOpenDialog(false);
  };

  const handleTooltip = () => {
    if (openDialog) {
      setOpenDialog(false);
    }
    if (!openDialog) {
      setOpenDialog(true);
    }
  };

  const createTooltip = (title, placement, children) => {
    return (
      <Tooltip
        PopperProps={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -5],
              },
            },
          ],
          disablePortal: true,
        }}
        open={openDialog}
        placement={placement}
        onClose={handleTooltipClose}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={title}
        arrow
        sx={{
          maxWidth: '200px'
        }}
      >
        {children}
      </Tooltip>
    );
  };

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
      }}
    >
      <FocusTrap open={false}>
        <Box
        sx={{
          maxWidth: '1000px',
          boxShadow: 4,
          borderRadius: 1,
          py: 1,
          my: 1,
          mx: 1,
        }}
        >
          {createTooltip(
            `Tool to predict a winner given a draft and find similar games (same champion on same team). 
            If similar games are found, they are color coded respective of which
            team won. Hit tab to move fowards in the form and shift+tab to move back.
            Only data of past two versions are kept, to save storage and have less neural
            networks to train.`, "bottom",
            <Grid container spacing={2} sx={{marginBottom: 2, px:2, marginTop: 1}}>
                {createTooltip('Select region','top',createAutocomplete('Region', formData.region, regions, 'region', true))}
                {createTooltip('Select game mode','top',createAutocomplete('Game Modes', formData.game_mode, game_modes, 'game_mode', true))}
                {createTooltip('Select rank','top',createAutocomplete('Rank', formData.elo, elos, 'elo', true))}
                {createTooltip('Select version','top',createAutocomplete('Version', formData.version, versions, 'version', true))}
                {createTooltip('Specify search to matches that include this champion','top',createAutocomplete('Champion', formData.champion, champions, 'champion', false,'optional'))}
                <Grid item xs={3}>
                  {createTooltip(
                    "Only results with number of matching champions at or above threshold are included","bottom",
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
                  )}
                </Grid>
                <Grid item xs={3}>
                  {createTooltip(
                    "Swap champions to opposite team", "top",
                    <Button
                      onClick={swapTeams}
                      fullWidth
                      variant="contained"
                      startIcon={<SwapHoriz />}
                      sx={{
                        height: '56px',
                      }}
                    >
                      <b>Swap Teams</b>
                    </Button>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                      <Button
                        onClick={handleTooltip}
                        fullWidth
                        variant='contained'
                        startIcon={<Info />}
                        sx={{
                          height: '56px',
                        }}
                      >
                        <b>Info</b>
                      </Button>
                  </ClickAwayListener>
                </Grid>
                <Grid item xs={6}>
                  {createTooltip(
                    "Champions on Blue Team","bottom-start",
                    <Typography sx={{fontWeight:'700'}}>
                      Blue Team
                    </Typography>
                  )}
                  {formData.blue_team.map((value, index) => (
                    createChampionAutocomplete('blue_team',value,index)
                  ))}
                </Grid>
                <Grid item xs={6}>
                  {createTooltip(
                    "Champions on Red Team","bottom-start",
                    <Typography sx={{fontWeight:'700'}}>
                      Red Team
                    </Typography>
                  )}
                  {formData.red_team.map((value, index) => (
                    createChampionAutocomplete('red_team',value,index)
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="inherit" onClick={onSubmit} disabled={loading} fullWidth>
                      {loading ? 'Loading' : 'Predict'}
                  </Button>
                </Grid>
            </Grid >
          )}
        </Box>
      </FocusTrap>
    </Box>
  );
}

export default DraftForm