import { AnyAction } from "redux";

export const BG_SAGA_INCREASE = "BG_SAGA_INCREASE";

export interface IBgJobState {
  saga: number
}

const initState: IBgJobState = { saga: 0 };

export const BgJobReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case BG_SAGA_INCREASE:
      return { saga: action.payload.id };
    default:
      return state;
  }
};