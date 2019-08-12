import { AnyAction } from "redux";

export interface ISlowListState {
  items: ISlowListItem[]
}

export interface ISlowListItem {
  id: number,
  isMarked: boolean
}

const initState: ISlowListState = { items: [] };
for (let i = 1; i <= 30; i++) {
  initState.items.push({ id: i, isMarked: false });
}


export const SlowListReducer = (state: ISlowListState = initState, action: AnyAction) => {
  if (action.type === "SlowList.mark") {
    const newItems = state.items.map(item =>
      action.payload.id === item.id ? { ...item, isMarked: !item.isMarked } : item
    );
    return { items: newItems };
  }
  return state;
};