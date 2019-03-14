import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import InputNameReducer from "./InputNameReducer";
import GoodsReducer from "./GoodsReducer";

const middlewares = [];
middlewares.push(createLogger());

const reducer = combineReducers({ InputNameReducer, GoodsReducer });

const persistRuducerConfig = {
  key: "helloworld",
  storage
};
const persistedReducer = persistReducer(persistRuducerConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistore = persistStore(store);

