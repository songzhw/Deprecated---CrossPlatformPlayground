export const COMPONENT_1 = "COMPONENT_1";

const initState = {
  count: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case COMPONENT_1:
      return { ...state, count: state.count * 2 };
    default:
      return state;
  }
}