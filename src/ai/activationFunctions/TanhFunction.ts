import ActivationFunction from './ActivationFunction';

class TanhFunction extends ActivationFunction {
  apply(x: number): number {
    return Math.tanh(x);
  }

  applyDerivative(x: number): number {
    const tanh = this.apply(x);
    return 1 - tanh * tanh;
  }
}

export default TanhFunction;