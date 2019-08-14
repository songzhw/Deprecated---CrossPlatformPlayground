import { combineReducers, createStore, Store } from "redux";
import { themeReducer } from "./ThemeReducer";

interface IApplicationState {
  theme: {
    backgroundColor: string
  }
}

const reducers = combineReducers({
  theme: themeReducer
});
export const store : Store<IApplicationState> = createStore(reducers);  // createStore(reducers, applyMiddleware(...middlewareArray);
