import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { httpMiddleware } from "./middlewares/HttpMiddlewares";
import { all, fork } from "redux-saga/effects";

import saga1 from "./saga/saga";
import channelDemoSaga from "./saga/channelDemoSaga";

import F8Reducer from "./F8Reducer";
import ReduxResearchReducer from "./research/ReduxResearchReducer";
import Component1Reducer from "./research/Component1Reducer";
import Component2Reducer from "./research/Component2Reducer";
import channelDemoReducer from "./research/channelDemoReducer";


// assemble middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, httpMiddleware];

// assemble reducers
const playgroundReducers = combineReducers({
  ReduxResearchReducer, Component1Reducer, Component2Reducer, channelDemoReducer
});
const reducers = combineReducers({
  F8Reducer, playgroundReducers
});

// create store
const store = createStore(reducers, applyMiddleware(...middleware));

// assemble sagas
const sagas = [saga1, channelDemoSaga];
const combineSaga = function* () {
  yield all(sagas.map(aSaga => fork(aSaga)));
};
sagaMiddleware.run(combineSaga);

export default store;