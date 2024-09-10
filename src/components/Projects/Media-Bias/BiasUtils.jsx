import * as ort from 'onnxruntime-web';
import seedrandom from "seedrandom";

export const runModel = async(text,seed) => {
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";
  const model_path = `${process.env.PUBLIC_URL}/models/classification_model.onnx`
  const vectorized_text = await convertTextToVector(text,seed)
  console.log(vectorized_text)
  try{
    const session = await ort.InferenceSession.create(model_path);
    const data = Float32Array.from(vectorized_text)
    const tensor_data = new ort.Tensor('float32',data,[1,100])
    const feeds = {input: tensor_data}
    const results = await session.run(feeds)
    return results.output.data
  } catch (error) {
    console.error('Error creating inference session or running the model:',error)
    return Array(100).fill(0)
  }
}

export const convertTextToVector = async (text, seed) => {
  const rng = seedrandom(seed);

  const windowSize = 2;
  let alpha = 0.1; 
  const minAlpha = 0.0001;
  const epochs = 20;
  const negativeSamples = 5;

  // Load pre-trained word vectors
  const d2v_model_path = `${process.env.PUBLIC_URL}/models/d2v_model.json`;
  const response = await fetch(d2v_model_path);
  const wordVectors = await response.json();

  // Preprocess the input text
  text = text.replace(/https?:\/\/\S+/g, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/[^a-zA-Z]/g, ' ');
  text = text.replace(/\s+[a-zA-Z]\s+/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  const tokens = text.toLowerCase().split(' ');

  // Initialize document vector randomly
  let vectorized = Array(100).fill(0).map(() => rng() * 2 - 1);

  // Generate word contexts using a sliding window
  const contexts = [];
  for (let i = 0; i < tokens.length; i++) {
    const context = tokens.slice(Math.max(0, i - windowSize), i)
      .concat(tokens.slice(i + 1, i + 1 + windowSize));
    contexts.push({ target: tokens[i], context });
  }

  const vocab = Object.keys(wordVectors);
  const vectorSize = 100;
  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  const updateVector = (vector, gradient, alpha) => vector.map((v, i) => v + alpha * gradient[i]);

  // Training loop
  for (let epoch = 0; epoch < epochs; epoch++) {
    contexts.forEach(({ target, context }) => {
      if (!wordVectors[target]) return; // Skip words not in vocab

      const targetVector = wordVectors[target];

      // Positive sampling: Calculate gradient for the positive context
      const positiveContext = context.map(word => wordVectors[word] || Array(vectorSize).fill(0));
      const positiveGradient = positiveContext.map(wordVec => wordVec.map((wv, i) => sigmoid(wv * vectorized[i])));

      // Update vectors using positive gradient
      positiveContext.forEach((wordVec, i) => {
        if (context[i] in wordVectors) {
          wordVectors[context[i]] = updateVector(wordVec, positiveGradient[i], alpha);
        }
      });

      // Negative sampling
      for (let n = 0; n < negativeSamples; n++) {
        const negativeWord = vocab[Math.floor(Math.random() * vocab.length)];
        if (!context.includes(negativeWord)) {
          const negVector = wordVectors[negativeWord];
          const negativeGradient = negVector.map((wv, i) => -sigmoid(wv * vectorized[i]));
          wordVectors[negativeWord] = updateVector(negVector, negativeGradient, alpha);
        }
      }

      // Update document vector
      vectorized = updateVector(
        vectorized,
        positiveGradient.reduce((sum, grad) => sum.map((s, i) => s + grad[i]), Array(vectorSize).fill(0)),
        alpha
      );
    });

    // Decay alpha
    alpha = Math.max(minAlpha, alpha * 0.9);
  }

  return vectorized;
};
