class ActivationFunction {
  apply(x: number): number {
    return x;
  }

  applyDerivative(x: number): number {
    return 1;
  }
}

export default ActivationFunction;