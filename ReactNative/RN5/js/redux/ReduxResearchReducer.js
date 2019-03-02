export const MAP01 = "MAP01";

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case MAP01:
      return { id: 1, name: "map01" };
    default:
      return state;
  }
}