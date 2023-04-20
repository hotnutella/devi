import Layer from './Layer';
import { ActivationFunction } from './activationFunctions/activationFunctions';

class NeuralNetwork {
  private layers: Layer[];

  constructor(inputCount: number, outputCount: number, hiddenLayerNeurons: number[], activationFunction: ActivationFunction) {
    this.layers = [];
    let input = inputCount;
    for (const neuronCount of hiddenLayerNeurons) {
      this.layers.push(new Layer(input, neuronCount, activationFunction));
      input = neuronCount;
    }
    this.layers.push(new Layer(input, outputCount, activationFunction));
  }

  public getLayers(): Layer[] {
    return this.layers;
  }

  /**
   * Get the output of the neural network. 
   * The output is the output of the last layer.
   * 
   * @param inputs 
   * @returns number[]
   */
  public getOutput(inputs: number[]): number[] {
    let outputs = inputs;
    for (const layer of this.layers) {
      outputs = layer.getOutput(outputs);
    }
    return outputs;
  }

  /**
   * Visualize the neural network. 
   * Shows the number of layers and neurons, and the weights and bias of each neuron.
   * 
   * @returns string
   */
  public visualize(): string {
    let output = '';
    output += 'Neural Network:\n';
    output += `Layers: ${this.layers.length}\n`;
    output += `Neurons: ${this.layers.reduce((total, layer) => total + layer.getNeurons().length, 0)}\n\n`;

    for (const layer of this.layers) {
      output += 'Layer:\n';
      for (const neuron of layer.getNeurons()) {
        output += 'Neuron:\n';
        output += `Weights: ${neuron.getWeights()}\n`;
        output += `Bias: ${neuron.getBias()}\n`;
      }
      output += '\n';
    }
    return output;
  }
}

export default NeuralNetwork;