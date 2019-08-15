import { AnyAction } from "redux";

export interface IBetterListState {
  [id: string]: IBetterListItem
}

export interface IBetterListItem {
  id: string,
  isMarked: boolean
}

const initState: IBetterListState = {};
for (let i = 1; i <= 10000; i++) {
  initState[i] = { id: `${i}`, isMarked: false };
}

export const BetterListReducer = (state = initState, action: AnyAction) => {
  if (action.type === "BetterList.mark") {
    const id = action.payload.id;
    const targetItem = state[id];
    return { ...state, [id]: { ...targetItem, isMarked: !targetItem.isMarked } };
  }
  return state;
};
