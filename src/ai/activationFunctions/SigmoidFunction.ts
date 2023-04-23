import ActivationFunction from './ActivationFunction';

class SigmoidFunction extends ActivationFunction {
  apply(x: number): number {
    return 1 / (1 + Math.exp(-x));
  }

  applyDerivative(x: number): number {
    const sigmoid = this.apply(x);
    return sigmoid * (1 - sigmoid);
  }
}

export default SigmoidFunction;