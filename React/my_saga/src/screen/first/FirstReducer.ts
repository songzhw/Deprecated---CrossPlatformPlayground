import { Reducer } from "redux";

export enum FirstActionTypes {
  ADD = "ADD"
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

export type FirstAction = IFirstAddAction //TOOD may have "|" later

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
        console.log(`szw reducer Action_ADD`);
        return state;
      default:
        return state;
    }

  };
