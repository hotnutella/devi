const leakyRelu = (x: number) => {
  const alpha = 0.01;
  return x >= 0 ? x : alpha * x;
}
export default leakyRelu;