export const ACTION_OBJ_FUNC = "ACTION_OBJ_FUNC";
export const createObjectWithFunction = (num) => ({
  type: ACTION_OBJ_FUNC,
  payload: {
    number: num,
    isEven: () => {
      return num % 2 === 0;
    }
  }
});

const initState = { obj: {} };

export default (state = initState, action) => {
  if (ACTION_OBJ_FUNC === action.type) {
    let number = action.payload.number * 3;
    let result = createObjectWithFunction(number).payload;
    return { obj: result };
  }
  return state;
}
