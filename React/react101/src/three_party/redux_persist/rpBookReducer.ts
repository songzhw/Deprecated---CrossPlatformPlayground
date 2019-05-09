import { AnyAction, Reducer } from "redux";

export interface IBookState {
  id: number;
  name: string;
  status: string;
}

const initState: IBookState = {
  id: 100, name: "none", status: "empty"
};

export const bookReducer: Reducer<IBookState, AnyAction> = (state = initState, action) => {
  switch (action.type) {
    case "BOOK_ADD": {
      return { id: action.id, name: action.name, status: action.status };
    }
  }
  return state;
};
