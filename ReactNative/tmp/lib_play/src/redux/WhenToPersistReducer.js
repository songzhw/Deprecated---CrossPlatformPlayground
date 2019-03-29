export const NUM_PLUS = "NUM_PLUS";
export const plusNum = (num) => ({
  type: NUM_PLUS,
  payload: num
});
export const NUM_DOUBLE = "NUM_DOUBLE";
export const doubleNum = (num) => ({
  type: NUM_DOUBLE,
  payload: num
});

const initState = { number: 1 };

export default (state = initState, action) => {
  if (NUM_PLUS === action.type) {
    return { number: action.payload + 1 };
  } else if (NUM_DOUBLE === action.type) {
    return { number: action.payload * 2 };
  }
  return state;
}
