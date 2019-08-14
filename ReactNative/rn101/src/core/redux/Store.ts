import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { themeReducer } from "./ThemeReducer";
import { BgJobReducer, IBgJobState } from "./BgJobReducer";
import createSagaMiddleware from "redux-saga";
import { BgJobSaga } from "./BgJobSaga";
import { fork, all } from "redux-saga/effects";

const reducers = combineReducers({
  theme: themeReducer,
  bg: BgJobReducer
});

const sagas = [BgJobSaga];
const rootSaga = function* () {
  yield all(sagas.map(saga => fork(saga)));
};
const sagaMiddleware = createSagaMiddleware();

// createStore(reducers, applyMiddleware(...middlewareArray);
export const store: Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);