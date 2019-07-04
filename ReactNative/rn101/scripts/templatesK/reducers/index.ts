import { ActionTypes } from "../actions";
import { ServiceState } from "./ServiceState";
import { AnyAction } from "redux";

export default function {{serviceCamel}}(
  state = new ServiceState(),
  action: AnyAction
): ServiceState {
  switch(action.type) {
    {{reducerCases}}
    default:
      return state;
  }
}


