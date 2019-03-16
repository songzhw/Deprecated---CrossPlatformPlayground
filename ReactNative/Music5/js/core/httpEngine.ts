export const API_RECOMMEND_HOME = "5c43e4513800006a00072e7c";

export const doFetch = (id: string) => {
  return fetch(`http://www.mocky.io/v2/${id}`);
};