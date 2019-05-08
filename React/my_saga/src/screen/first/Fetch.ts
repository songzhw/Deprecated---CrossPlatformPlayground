// 备注: 下面的两个fetchNumberForAdding, 不管返回Promise, 还是async (本质上也是返回Promise), sagalet都是能处理的. 我实践过.

export const fetchNumberForAdding = () => {
  return Promise.resolve(4);
};


// export const fetchNumberForAdding = async (): Promise<number> => {
//   const value = await 4;
//   return value;
// };
