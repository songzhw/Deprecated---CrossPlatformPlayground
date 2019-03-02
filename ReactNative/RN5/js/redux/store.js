import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import F8Reducer from "./F8Reducer";
import ReduxResearchReducer from "./ReduxResearchReducer";
import { httpMiddleware } from "./middlewares/HttpMiddlewares";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, httpMiddleware];

const playgroundReducers = combineReducers({
  ReduxResearchReducer
});
const reducers = combineReducers({
  F8Reducer, playgroundReducers
});
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;