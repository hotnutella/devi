import SigmoidFunction from './SigmoidFunction';
import ReluFunction from './ReluFunction';
import LeakyReluFunction from './LeakyReluFunction';
import TanhFunction from './TanhFunction';
import SoftmaxFunction from './SoftmaxFunction';

const sigmoid = new SigmoidFunction();
const relu = new ReluFunction();
const leakyRelu = new LeakyReluFunction();
const tanh = new TanhFunction();
const softmax = new SoftmaxFunction();

export {
  sigmoid,
  relu,
  leakyRelu,
  tanh,
  softmax
};