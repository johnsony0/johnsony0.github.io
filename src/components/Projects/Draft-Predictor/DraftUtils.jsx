import * as ort from 'onnxruntime-web';
import { usePapaParse } from 'react-papaparse';
import { versions, champions } from './DraftData';

export const FindSimilarGame = async (formData) => {
  const { readRemoteFile } = usePapaParse();
  let dict = { count: 0 };
  const database_url =  new URL('/src/assets/database.csv', import.meta.url).href;
  
  return new Promise((resolve, reject) => {
    readRemoteFile(database_url, {
      step: (row) => {
        const match_region = formData.region === 'ANY' || formData.region === row.data[2];
        const match_gameMode = formData.game_mode === 'ANY' || formData.game_mode === row.data[3];
        const match_elo = formData.elo.includes('ANY') || formData.elo.includes(row.data[4].split(' ')[0]);
        const match_version = formData.version === 'ANY' || formData.version === row.data[5].split('.').slice(0, 2).join('.');

        if (match_region && match_gameMode && match_elo && match_version) {
          dict.count++;
          const blue_matches = formData.blue_team.filter(item => row.data.slice(6, 11).includes(item));
          const red_matches = formData.red_team.filter(item => row.data.slice(11, 16).includes(item));
          const total_matches = blue_matches.length + red_matches.length;

          if (total_matches >= formData.threshold) {
            let push_data = true;
            if (formData.champion) {
              if (!blue_matches.includes(formData.champion) && !red_matches.includes(formData.champion)) {
                push_data = false;
              }
            }
            if (push_data) {
              let [region, matchId] = row.data[1].split('_');
              region = region === 'NA1' ? 'na' : region === 'EUW1' ? 'euw' : region;
              
              if (!dict[total_matches]) {
                dict[total_matches] = [];
              }
              dict[total_matches].push({
                url: `https://www.leagueofgraphs.com/match/${region}/${matchId}`,
                winner: row.data[16]
              });
            }
          }
        }
      },
      complete: () => resolve(dict),
      error: (error) => reject(error)
    });
  });
};

export const runModel = async (e, formData) => {
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

  e.preventDefault();

  const blue_team = encodeTeam(formData.blue_team);
  const red_team = encodeTeam(formData.red_team);
  const version = labelToValueMap(versions, formData.version);
  const model_url =  new URL(`/src/assets/models/${formData.region}_${formData.game_mode}_${formData.elo}_${version}_nn_model.onnx`, import.meta.url).href;

  try {
    const session = await ort.InferenceSession.create(model_url);

    const data = Float32Array.from([...blue_team, ...red_team]);
    const tensor_data = new ort.Tensor('float32', data, [1, 2, 168]);
    const feeds = { input: tensor_data };

    const results = await session.run(feeds);
    return results.output.data;
  } catch (error) {
    console.error('Error creating inference session or running the model:', error);
    return "Not Enough Data";
  }
}

export const encodeTeam = (team) => {
  const encodedTeam = new Array(champions.length).fill(0);
  team.forEach(champ => {
    const champIndex = champions.findIndex(champion => champion.value === champ);
    if (champIndex === -1) {
      throw new Error(`Champion '${champ}' not found in list.`);
    }
    encodedTeam[champIndex] = 1;
  });
  return encodedTeam;
};


export const arrayToValueMap = (dct, array) => {
    const map = new Map(dct.map(({label,value}) => [label,value]))
    const mapped_array = array.map(label => map.get(label))
    return mapped_array
  };

export const labelToValueMap = (dct, label) => {
    const map = new Map(dct.map(({label,value}) => [label,value]))
    const mapped_label = map.get(label)
    return mapped_label
};
  