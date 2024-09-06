import * as ort from 'onnxruntime-web';
import seedrandom from "seedrandom";

export const runModel = async(formData,seed) => {
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";
  e.preventDefault();
  model_path = `${process.env.PUBLIC_URL}/models/classification_model.onnx`
  const vectorized_text = convertTextToVector(text,seed)
  try{
    const sesion = await ort.InferenceSession.create(model_path);
    const data = Float32Array.from(vectorized_text)
    const tensor_data = new ort.Tensor('float32',data,[1,100])
    const feeds = {inputs: tensor_data}
    const results = await session.run(feeds)
    return results.output.data
  } catch (error) {
    console.error('Error creating inference session or running the model:',error)
    return null
  }
}

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
