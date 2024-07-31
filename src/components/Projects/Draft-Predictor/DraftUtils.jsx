import * as ort from 'onnxruntime-web';
import { usePapaParse } from 'react-papaparse';
import { champions } from './DraftData';

export const FindSimilarGame = (formData) => {
    const { readRemoteFile } = usePapaParse();
    const file_path = `${process.env.PUBLIC_URL}/database.csv`
    console.log(formData)
    readRemoteFile(file_path, {
        step: (row) => {
            const matchRegion = formData.region === 'ANY' || formData.region === row.data[2];
            const matchGameMode = formData.game_mode === 'ANY' || formData.game_mode === row.data[3];
            const matchElo = formData.elo.includes('ANY') || formData.elo.includes(row.data[4].split(' ')[0])
            //const matchVersion = formData.version === 'ANY' || formData.version === row.data[5];
            if (matchRegion && matchGameMode && matchElo){
                const blue_matches = formData.blue_team.filter(item => row.data.slice(6,11).includes(item)).length
                const red_matches = formData.red_team.filter(item => row.data.slice(11,16).includes(item)).length
                
                if(blue_matches + red_matches >= formData.threshold){
                    let [region, matchId] = row.data[1].split('_');
                    if(region === 'NA1'){
                        region = 'na'
                    }
                    console.log(`https://www.leagueofgraphs.com/match/${region}/${matchId}`)
                    console.log(row.data)
                }
                }
        }
    })
}

export const runModel = async (e, formData) => {
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

  e.preventDefault()

  const blue_team = encodeTeam(formData.blue_team)
  const red_team = encodeTeam(formData.red_team)

  const model_path = `${process.env.PUBLIC_URL}/models/NA1_ARAM_ANY_14-14_nn_model.onnx`
  const session = await ort.InferenceSession.create(model_path);

  const data = Float32Array.from([...blue_team,...red_team])
  const tensor_data = new ort.Tensor('float32',data,[1,2,168])
  const feeds = {input: tensor_data}

  const results = await session.run(feeds)
  return results.output.data
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
  