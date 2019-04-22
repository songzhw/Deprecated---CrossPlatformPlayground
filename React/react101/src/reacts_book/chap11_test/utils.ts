export function add(a: number, b: number): number {
  return a + b;
}

export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
