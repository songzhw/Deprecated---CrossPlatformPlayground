import InputNameReducer from "./InputNameReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middlewares = [];
middlewares.push(createLogger());

const reducer = combineReducers({ InputNameReducer });

const persistRuducerConfig = {
  key: "helloworld",
  storage
};
const persistReducer = persistReducer(persistRuducerConfig, reducer);

export const store = createStore(persistReducer, applyMiddleware(...middlewares));
export const persistore = persistStore(store);

