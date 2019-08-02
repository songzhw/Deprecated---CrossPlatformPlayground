import { AnyAction } from "redux";

interface ITodoItem {
  isComplete: boolean;
  description: string;
}

interface IAppState {
  items: ITodoItem[]
}


export const TodoReducer = (state: IAppState = { items: [] }, action: AnyAction) => {
  // TODO should use Constants for Actions
  switch (action.type) {
    case "ADD":

      return state;
    case "FILTER":

      return state;
    default:
      return state;
  }
};