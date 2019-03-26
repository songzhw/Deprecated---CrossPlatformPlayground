export const FETCH_GOODS = "FETCH_GOODS";
export const createFetchGoodsAction = (goods) => ({
  type: FETCH_GOODS,
  payload: goods
});

const initState = { goods: "" };

export default (state = initState, action) => {
  if (FETCH_GOODS === action.type) {
    return { ...state, goods: action.payload };
  }
  return state;
}
