import { combineReducers, createStore, Store } from "redux";
import { themeReducer } from "./ThemeReducer";
import { BgJobReducer, IBgJobState } from "./BgJobReducer";

const reducers = combineReducers({
  theme: themeReducer,
  bg: BgJobReducer
});
export const store: Store = createStore(reducers);  // createStore(reducers, applyMiddleware(...middlewareArray);
