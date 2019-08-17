import { AnyAction } from "redux";

export const SET_THEME = "SET_THEME";
export const createSetThemeAction = (theme: string) => {
  return {
    type: SET_THEME,
    payload: { theme }
  };
};


export const themeReducer = (state = {backgroundColor: ""}, action: AnyAction) => {
  switch (action.type) {
    case SET_THEME:
      const themeName = action.payload.theme;
      if (themeName === "red") {
        return { backgroundColor: "red" };
      } else if (themeName === "green") {
        return { backgroundColor: "green" };
      }
      return state;
    default:
      return state;
  }
};