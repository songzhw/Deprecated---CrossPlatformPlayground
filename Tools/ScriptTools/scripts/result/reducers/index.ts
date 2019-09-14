import { ActionTypes } from "../actions";
import { ServiceState } from "./ServiceState";
import { AnyAction } from "redux";

export default function PLAY_MUSIC(
  state = new ServiceState(),
  action: AnyAction
): ServiceState {
  switch (action.type) {
    case ActionTypes.SET_PROGRESS: {
      const newState: ServiceState = { ...state };
      return newState;
    }

    case ActionTypes.POST_PROGRESS: {
      const newState: ServiceState = { ...state };
      return newState;
    }

    case ActionTypes.CLEAR_PROGRESS: {
      const newState: ServiceState = { ...state };
      return newState;
    }

    default:
      return state;
  }
}


