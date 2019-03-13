import InputNameReducer from "./InputNameReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";

const middlewares = [];
middlewares.push(createLogger());
const reducer = combineReducers({ InputNameReducer });
export const store = createStore(reducer, applyMiddleware(...middlewares));

