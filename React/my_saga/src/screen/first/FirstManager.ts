// export function add(one: number, two: number): number {
//   return one + two;
// }

export const add = (one: number, two: number): number => {
  return one + two;
};

export const printAsync = (result: any) => {
  setTimeout(() =>
    console.log("szw ", result), 4000);
};

export const printTime = (prefix: string) => {
  console.log(`szw ${prefix} : ${new Date().toTimeString()}`)
}
