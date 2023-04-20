const softmax = (x: number[]) => {
  const exps = x.map((x) => Math.exp(x));
  const sum = exps.reduce((sum, x) => sum + x, 0);
  return exps.map((x) => x / sum);
}
export default softmax;