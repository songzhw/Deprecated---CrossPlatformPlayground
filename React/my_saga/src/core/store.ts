import { FirstReducer, IFirstState } from "../screen/first/FirstReducer";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { createSagaletMiddleware } from "../sagalet/SagaletMIddleware";
import { firstSaga } from "../screen/first/FirstSagalet";

export interface IAppState {
  first: IFirstState
}

const rootReducer = combineReducers<IAppState>({ first: FirstReducer });

export function configureStore(): Store<IAppState> {
  const sagaletMiddleware = createSagaletMiddleware();
  const middlewares = [sagaletMiddleware];
  const store = createStore(rootReducer, undefined, applyMiddleware(...middlewares));
  sagaletMiddleware.run(firstSaga);
  return store;
}