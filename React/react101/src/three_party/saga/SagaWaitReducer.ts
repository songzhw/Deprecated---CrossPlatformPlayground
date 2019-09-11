import { AnyAction } from "redux";
import { FETCH_USER, FETCH_USER_DONE } from "./SagaWait";

const initState = {
  user: {}
};
export const SagaWaitReducer = (state = initState, action: AnyAction) => {
  if (action.type === FETCH_USER) {
    const id = action.payload.id;
    const user = { id: id * 1000 + 123, name: "hello", sex: "female" };
    return { user };
  }
  return state;
};
