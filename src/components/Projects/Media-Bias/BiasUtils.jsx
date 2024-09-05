import seedrandom from "seedrandom";

export const convertTextToVector = async(text,seed) => {
  const rng = seedrandom(seed)

  const alpha = 0.1;
  const minAlpha = 0.0001;
  const epochs = 20

  let wordVectors = {};

  const d2v_model_path = `${process.env.PUBLIC_URL}/models/d2v_model.json`
  const response = await fetch(d2v_model_path);
  wordVectors = await response.json();
  
  text = text.replace(/https?:\/\/\S+/g, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/[^a-zA-Z]/g, ' ');
  text = text.replace(/\s+[a-zA-Z]\s+/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  const tokens = text.toLowerCase().split(' ');
  let vectorized = Array(100).fill(0).map(() => 1e-3 + (1e-2 - 1e-3) * rng());

  for (let epoch = 0; epoch < epochs; epoch++) {
    let updatedVector = [...vectorized];
    const currentAlpha = alpha - (alpha - minAlpha) * (epoch / epochs);
    tokens.forEach(word => {
      if (word in wordVectors) {
        const wordVector = wordVectors[word];
        for (let i = 0; i < vectorized.length; i++) {
          vectorized[i] += currentAlpha * (wordVector[i] - vectorized[i]); 
        }
      }
    });

    vectorized = updatedVector; 
  }
  return vectorized;
}