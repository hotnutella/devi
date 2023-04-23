import ActivationFunction from './activationFunctions/ActivationFunction';

class Neuron {
  private weights: number[];
  private bias: number;
  private activationFunction: ActivationFunction;

  private inputCache: number[];
  private outputCache: number;
  private deltaCache: number;

  constructor(inputCount: number, activationFunction: ActivationFunction) {
    this.weights = [];
    this.bias = Math.random();
    this.activationFunction = activationFunction;

    this.inputCache = [];
    this.outputCache = 0;
    this.deltaCache = 0;

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
    this.inputCache = [...inputs];
    let output = 0;
    for (let i = 0; i < inputs.length; i++) {
      const weight = this.weights[i] || 0;
      output += inputs[i] * weight;
    }
    this.outputCache = this.activationFunction.apply(output + this.bias);
    return this.outputCache;
  }
}

export default Neuron;