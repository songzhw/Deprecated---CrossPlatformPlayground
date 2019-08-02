import { AnyAction } from "redux";

// TODO should use Constants for Actions
// TODO model should be in the model.file
export interface ITodoItem {
  isComplete: boolean;
  description: string;
}

export interface IAppState {
  items: ITodoItem[];
  filter: string;
}

const defaultState = { items: [], filter: "all" } as IAppState;

export const TodoReducer = (state: IAppState = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD":
      const size = state.items.length;
      const todo = { isComplete: size % 2 === 0, description: action.payload };
      const value = { items: [...state.items, todo] };
      console.log("reducer add ", value);
      return value;
    case "FILTER":
      console.log(`reducer filter: `, action);
      return state;
    default:
      return state;
  }
};