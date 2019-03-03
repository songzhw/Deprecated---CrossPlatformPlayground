export const COMPONENT_2 = "COMPONENT_2";

const initState = {
  count: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case COMPONENT_2:
      return { ...state, counter: state.count * 2 };
    default:
      return state;
  }
}