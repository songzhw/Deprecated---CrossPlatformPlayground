// export function add(one: number, two: number): number {
//   return one + two;
// }

export const add = (one: number, two: number): number => {
  return one + two;
};

export const print = (result: any) => {
  setTimeout(() =>
    console.log("szw ", result), 4000);
};