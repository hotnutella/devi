import ActivationFunction from './ActivationFunction';

class LeakyReluFunction extends ActivationFunction {
  private alpha: number;
  
  constructor (alpha: number = 0.01) {
    super();
    this.alpha = alpha;
  }

  apply(x: number): number {
    return Math.max(this.alpha * x, x);
  }

  applyDerivative(x: number): number {
    return x > 0 ? 1 : this.alpha;
  }
}

export default LeakyReluFunction;