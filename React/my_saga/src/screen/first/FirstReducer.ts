import { Reducer } from "redux";

export enum FirstActionTypes {
  ADD = "ADD",
  ON_ADDED = "ADDED"
}

export interface IFirstAddAction {
  type: FirstActionTypes.ADD;
  payload: {
    arg1: number,
    arg2: number
  }
}

export const createFirstAddAction = (num1: number, num2: number) => {
  return {
    type: FirstActionTypes.ADD,
    payload: { arg1: num1, arg2: num2 }
  };
};


export interface IFirstOnAddedAction {
  type: FirstActionTypes.ON_ADDED,
  payload: { result: number }
}

export const createFirstOnAddedAction = (result: number) => {
  return {
    type: FirstActionTypes.ON_ADDED,
    payload: { result }
  };
};

export type FirstAction = IFirstAddAction | IFirstOnAddedAction

export interface IFirstState {
  addedResult: number
}

const initState = {
  addedResult: 0
};
export const FirstReducer: Reducer<IFirstState, FirstAction> =
  (state: IFirstState = initState, action: FirstAction) => {

    switch (action.type) {
      case FirstActionTypes.ADD:
        console.log(`szw reducer1 Action_ADD`);
        return state;
      case FirstActionTypes.ON_ADDED:
        console.log(`szw reducer2 : `, action.payload.result);
        return { ...state, addedResult: action.payload.result };
      default:
        return state;
    }

  };
