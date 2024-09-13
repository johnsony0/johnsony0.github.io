import * as ort from 'onnxruntime-web';
import { AutoTokenizer,env } from '@xenova/transformers'

env.allowLocalModels = false;
env.useBrowserCache = false;

export const runModel = async(text) => {
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";
  const model_path = `${process.env.PUBLIC_URL}/models/classification_model.onnx`
  const vectorized_text = await convertTextToVector(text)
  try{
    const session = await ort.InferenceSession.create(model_path);
    const data = new Int32Array(vectorized_text)
    const tensor_data = new ort.Tensor('int32',data,[1,data.length])
    const feeds = {input: tensor_data}
    const results = await session.run(feeds)
    return results.output.data
  } catch (error) {
    console.error('Error creating inference session or running the model:',error)
    return Array(100).fill(0)
  }
}

export const convertTextToVector = async (text) => {
  text = text.replace(/https?:\/\/\S+/g, '')
  text = text.replace(/<[^>]+>/g, '')
  text = text.replace(/[^a-zA-Z]/g, ' ')
  text = text.replace(/\s+[a-zA-Z]\s+/g, ' ')
  text = text.replace(/\s+/g, ' ').trim()
  try {
    const tokenizer = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased')
    const encodedInput = await tokenizer.encode(text)
    return encodedInput
  } catch (error) {
    console.error('Error loading tokenizer:', error)
    return null
  }
};
