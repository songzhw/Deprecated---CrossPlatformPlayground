// 类似Java中Thread.sleep(ms)的效果
export const delayAsync = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const delaySync = (ms: number) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) {}
};