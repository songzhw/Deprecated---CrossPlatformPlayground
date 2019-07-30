// 类似Java中Thread.sleep(ms)的效果
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};