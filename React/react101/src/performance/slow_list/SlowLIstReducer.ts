import { AnyAction } from "redux";

export interface ISlowListState {
  items: ISlowListItem[]
}

export interface ISlowListItem {
  id: number,
  isMarked: boolean
}

const initState = { items: [] };
export const SlowListReducer = (state: ISlowListState = initState, action: AnyAction) => {
  if (action.type === "SlowList.mark") {
    return state.items.map(item =>
      action.payload.id === item.id ? { ...item, isMarked: !item.isMarked } : item
    );
  }
  return state;
};