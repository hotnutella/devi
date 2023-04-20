import sigmoid from './sigmoid';
import relu from './relu';
import leakyRelu from './leakyRelu';
import softmax from './softmax';
import linear from './linear';
import tanh from './tanh';

export type ActivationFunction = (x: number) => number;

export default {
  sigmoid,
  relu,
  leakyRelu,
  softmax,
  linear,
  tanh,
};