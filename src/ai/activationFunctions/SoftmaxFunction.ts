import ActivationFunction from './ActivationFunction';

class SoftmaxFunction extends ActivationFunction {
  apply(x: number): number {
    throw new Error('SoftmaxFunction.apply is not implemented');
  }

  applyDerivative(x: number): number {
    throw new Error('SoftmaxFunction.applyDerivative is not implemented');
  }

  applyVector(x: number[]): number[] {
    const exps = x.map((v) => Math.exp(v));
    const sumExps = exps.reduce((a, b) => a + b);
    return exps.map((v) => v / sumExps);
  }

  applyDerivativeVector(x: number[]): number[][] {
    const softmax = this.applyVector(x);
    const result: number[][] = [];
    for (let i = 0; i < softmax.length; i++) {
      const row = [];
      for (let j = 0; j < softmax.length; j++) {
        if (i === j) {
          row.push(softmax[i] * (1 - softmax[i]));
        } else {
          row.push(-softmax[i] * softmax[j]);
        }
      }
      result.push(row);
    }
    return result;
  }
}

export default SoftmaxFunction;