import { ActivationFunction } from './activationFunctions/activationFunctions';

class Neuron {
  private weights: number[];
  private bias: number;
  private activationFunction: ActivationFunction;

  constructor(inputCount: number, activationFunction: ActivationFunction) {
    this.weights = [];
    this.bias = Math.random();
    this.activationFunction = activationFunction;

    for (let i = 0; i < inputCount; i++) {
      this.weights.push(Math.random());
    }
  }

  public getWeights(): number[] {
    return this.weights;
  }

  public getBias(): number {
    return this.bias;
  }

  public setWeights(weights: number[]): void {
    this.weights = weights;
  }

  public setBias(bias: number): void {
    this.bias = bias;
  }

  /**
   * Get the output of the neuron. 
   * The output is the sum of the inputs multiplied by the weights, plus the bias.
   * 
   * @param inputs 
   * @returns number[]
   */
  public getOutput(inputs: number[]): number {
    let output = 0;
    for (let i = 0; i < inputs.length; i++) {
      const weight = this.weights[i] || 0;
      output += inputs[i] * weight;
    }
    return this.activationFunction(output + this.bias);
  }
}

export default Neuron;