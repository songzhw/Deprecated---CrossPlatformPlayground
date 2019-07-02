import { combineReducers, createStore } from "redux";
import { themeReducer } from "./ThemeReducer";

const reducers = combineReducers({ theme: themeReducer });
export const store = createStore(reducers);  // createStore(reducers, applyMiddleware(...middlewareArray);
