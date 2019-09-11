import { AnyAction } from "redux";
import { FETCH_USER, FETCH_USER_DONE } from "./SagaWait";

const initState = {
  user: {}
};

export const SagaWaitReducer = (state = initState, action: AnyAction) => {
  if (action.type === FETCH_USER_DONE) {
    console.log(`szw reducer FETCH_USER_DONE`);
  }
  return state;
};
