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

      return state;
    case "FILTER":

      return state;
    default:
      return state;
  }
};