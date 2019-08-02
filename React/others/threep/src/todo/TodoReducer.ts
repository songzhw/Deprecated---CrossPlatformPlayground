import { AnyAction } from "redux";

// TODO should use Constants for Actions
// TODO model should be in the model.file
export interface ITodoItem {
  isComplete: boolean;
  description: string;
}

export interface IAppState {
  items: ITodoItem[]
}


export const TodoReducer = (state: IAppState = { items: [] }, action: AnyAction) => {
  switch (action.type) {
    case "ADD":
      const size = state.items.length;
      const todo = { isComplete: size % 2 === 0, description: action.payload };
      const value = { items: [...state.items, todo] };
      console.log("reducer add ", value);
      return value;
    case "FILTER":

      return state;
    default:
      return state;
  }
};