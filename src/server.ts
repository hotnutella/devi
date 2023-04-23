import express from 'express';
import Neuron from './ai/Neuron';
import Layer from './ai/Layer';
import NeuralNetwork from './ai/NeuralNetwork';
import { relu, sigmoid } from './ai/activationFunctions/activationFunctions';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, I'm Devi!");
});

app.get("/neuron", (req, res) => {
  const inputs = [10, -2];
  const neuron = new Neuron(inputs.length, sigmoid);
  const output = neuron.getOutput(inputs);
  res.json(output);
});

app.get("/layer", (req, res) => {
  const inputs = [10, -2];
  const layer = new Layer(inputs.length, 2, relu);
  const output = layer.getOutput(inputs);
  res.json(output);
});

app.get("/neural-network", (req, res) => {
  const inputData = [10, -2];
  const hiddenLayerNeurons = [3, 2];
  const outputCount = 1;

  const neuralNetwork = new NeuralNetwork(inputData.length, outputCount, hiddenLayerNeurons, sigmoid);
  console.log(neuralNetwork.visualize());
  const output = neuralNetwork.getOutput(inputData);
  res.json(output);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
