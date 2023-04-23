import ActivationFunction from './ActivationFunction';

class ReluFunction extends ActivationFunction {
  apply(x: number): number {
    return Math.max(0, x);
  }

  applyDerivative(x: number): number {
    return x > 0 ? 1 : 0;
  }
}

export default ReluFunction;