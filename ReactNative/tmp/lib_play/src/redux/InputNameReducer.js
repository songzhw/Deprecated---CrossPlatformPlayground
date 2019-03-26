export const INPUT_ACTION = "INPUT_ACTION";
export const createInputAction = (text) => ({
  type: INPUT_ACTION,
  payload: { name: text }
});

const initState = { name: "" };

export default (state = initState, action) => {
  if (INPUT_ACTION === action.type) {
    return { ...state, name: action.payload.name };
  }
  return state;
}
