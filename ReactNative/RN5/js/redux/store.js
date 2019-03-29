import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { httpMiddleware } from "./middlewares/HttpMiddlewares";
import { all, fork } from "redux-saga/effects";

import saga0 from "./saga/saga";
import sagaChannel1 from "./saga/demo1/saga1";
import sagaChannel2 from "./saga/demo2/saga2";

import F8Reducer from "./F8Reducer";
import ReduxResearchReducer from "./research/ReduxResearchReducer";
import Component1Reducer from "./research/Component1Reducer";
import Component2Reducer from "./research/Component2Reducer";
import channelDemoReducer from "./research/channelDemoReducer";
import channel2Reducer from "./research/channel2Reducer";
import { intervalSaga } from "./interval_demo/IntervalSaga";


// assemble middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, httpMiddleware];

// assemble reducers
const playgroundReducers = combineReducers({
  ReduxResearchReducer, Component1Reducer, Component2Reducer, channelDemoReducer, channel2Reducer
});
const reducers = combineReducers({
  F8Reducer, playgroundReducers
});

// create store
const store = createStore(reducers, applyMiddleware(...middleware));

// assemble sagas
const sagas = [saga0, sagaChannel1, sagaChannel2, intervalSaga];
const combineSaga = function* () {
  yield all(sagas.map(aSaga => fork(aSaga)));
};
sagaMiddleware.run(combineSaga);

export default store;