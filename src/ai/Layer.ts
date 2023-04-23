import Neuron from './Neuron';
import ActivationFunction from './activationFunctions/ActivationFunction';

class Layer {
  private neurons: Neuron[];

  constructor(inputCount: number, neuronCount: number, activationFunction: ActivationFunction) {
    this.neurons = [];

    for (let i = 0; i < neuronCount; i++) {
      this.neurons.push(new Neuron(inputCount, activationFunction));
    }
  }

  public getNeurons(): Neuron[] {
    return this.neurons;
  }

  /**
   * Get the output of the layer. 
   * The output is the output of each neuron in the layer.
   * 
   * @param inputs 
   * @returns number[]
   */
  public getOutput(inputs: number[]): number[] {
    const outputs: number[] = [];
    for (const neuron of this.neurons) {
      outputs.push(neuron.getOutput(inputs));
    }
    return outputs;
  }
}

export default Layer;