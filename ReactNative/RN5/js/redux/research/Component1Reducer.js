export const COMPONENT_1 = "COMPONENT_1";

const initState = {
  count: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case COMPONENT_1:
      return { ...state, counter: state.count * 2 };
    default:
      return state;
  }
}