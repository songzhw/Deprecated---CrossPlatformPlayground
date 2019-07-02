import { AnyAction } from "redux";

export const SET_THEME = "SET_THEME";
export const createSetThemeAction = (theme: string) => {
  return {
    type: SET_THEME,
    payload: { theme }
  };
};


export const themeReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_THEME:
      console.log(`szw reducer, `, action);
      return state;
    default:
      return state;
  }
};