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
  comment: string;
}

const defaultState = { items: [], filter: "all", comment: "" } as IAppState;

export const TodoReducer = (state: IAppState = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD":
      const size = state.items.length;
      const todo = { isComplete: size % 2 === 0, description: action.payload };
      const value = { ...state, items: [...state.items, todo] };
      console.log("reducer add ", value);
      return value;
    case "FILTER":
      return { ...state, filter: action.payload };
    case "COMMENT":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};