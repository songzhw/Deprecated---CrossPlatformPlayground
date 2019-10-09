import { AnyAction } from "redux";

export const BG_SAGA_INCREASE = "BG_SAGA_INCREASE";

export interface IBgJobState {
  saga: number
}

const initState: IBgJobState = { saga: 0 };

export const BgJobReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case BG_SAGA_INCREASE:
      console.log(`szw reducer: `, action);
      let ret = action.payload.id;
      for(let i = 0 ; i < 20000; i++){
        ret = ret + i * i;
      }
      console.log(`szw reducer after math: `, ret);
      return { saga: ret };
    default:
      return state;
  }
};