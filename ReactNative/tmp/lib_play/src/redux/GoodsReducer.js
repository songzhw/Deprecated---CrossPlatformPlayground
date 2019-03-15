export const FETCH_GOODS = "FETCH_GOODS";
export const createFetchGoodsAction = (goods) => ({
  type: FETCH_GOODS,
  payload: goods
});

const initState = { goods: "" };

export default (state = initState, action) => {
  if (FETCH_GOODS === action.type) {
    console.log(`szw reducer2 ${JSON.stringify(action)}`);
    return { ...state, goods: action.payload };
  }
  return state;
}
