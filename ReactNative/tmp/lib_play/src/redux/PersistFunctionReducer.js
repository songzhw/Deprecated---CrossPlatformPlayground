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

const initState = { obj: { number: 1, isEven: ()=>{} } };

export default (state = initState, action) => {
  if (ACTION_OBJ_FUNC === action.type) {
    console.log(`szw reducer ${JSON.stringify(action)}`)
    let number = action.payload.number * 3;
    let result = createObjectWithFunction(number).payload;
    return { obj: result };
  }
  return state;
}
