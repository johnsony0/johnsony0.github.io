import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import DraftForm from "./DraftForm";
import DraftDialog from './DraftDialog'; 
import {labelToValueMap, arrayToValueMap, FindSimilarGame, runModel} from './DraftUtils'
import {champions, regions, elos, game_modes, versions} from './DraftData';

/*steps to update (once every other week pref)
1. get riot api key and put into .env
2. run main() in database_setup to get new data
3. delete data of older versions (only keep data of 2 most recent versions)
4. run get_all_models in model_setup
5. run get_csv in data_extraction
6. move new csv and all models into respective folders, rename csv to database.csv delete last line of csv
*/
function DraftPredictior() {
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
    champion: yup.string().nullable().optional(),
    threshold: yup.number().min(1).max(10).required('Threshold is required')
  });

  const defaultFormData = {
    blue_team: ['Ekko', 'Olaf', 'Viktor', 'Ezreal', 'Zyra'],
    red_team: ['Rumble', 'Lee Sin', 'Karma', 'Ashe', 'Miss Fortune'],
    region: regions[0].label,
    game_mode: game_modes[0].label,
    elo: elos[0].label,
    version: versions[0].label,
    champion: null,
    threshold: 5
  };

  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ winner: '', matches: {} });

  const getInitialFormData = () => {
    const cookieData = Cookies.get('formData');
    return cookieData ? JSON.parse(cookieData) : defaultFormData;
  };

  const [formData, setFormData] = useState(getInitialFormData);

  useEffect(() => {
    Cookies.set('formData', JSON.stringify(formData), { expires: 7, samesite: 'Lax' });
  }, [formData]);

  const swapTeams = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      blue_team: prevFormData.red_team,
      red_team: prevFormData.blue_team
    }));
  }

  const handleParameterChange = (parameter, newValue) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [parameter]: newValue
    }));
  }

  const handleTeamChange = (team, index, newValue) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [team]: prevFormData[team].map((item, i) => (i === index ? newValue || '' : item))
    }));
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      await schema.validate(formData);
      const mapped_data = {
        blue_team: arrayToValueMap(champions, formData.blue_team),
        red_team: arrayToValueMap(champions, formData.red_team),
        region: labelToValueMap(regions, formData.region),
        game_mode: labelToValueMap(game_modes, formData.game_mode),
        elo: labelToValueMap(elos, formData.elo),
        version: formData.version,
        champion: labelToValueMap(champions, formData.champion),
        threshold: formData.threshold
      };
      const parsed_match_data = await FindSimilarGame(mapped_data);
      const response = await runModel(e, mapped_data);

      const winner = typeof response === 'string' ? 2 : (response[0] > response[1] ? 0 : 1);
      const confidence = (response[winner] * 100).toFixed(2);
      const { count, ...matches } = parsed_match_data;
      setDialogContent({ winner, confidence, matches, count });
      handleClickOpen();
    } catch (error) {
      console.error("Validation or API call failed:", error);
    }
    setLoading(false);
  }

  return (
    <>
      <DraftForm
        formData={formData}
        swapTeams={swapTeams}
        handleParameterChange={handleParameterChange}
        handleTeamChange={handleTeamChange}
        onSubmit={onSubmit}
        loading={loading}
      />
      <DraftDialog
        open={dialogOpen}
        handleClose={handleClose}
        data={dialogContent.matches}
        count={dialogContent.count}
        winner={dialogContent.winner}
        confidence={dialogContent.confidence}
        formData={formData}
      />
    </>
  );
}

export default DraftPredictior;