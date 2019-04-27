import { FirstReducer, IFirstState } from "../screen/first/FirstReducer";
import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import { createSagaletMiddleware } from "../sagalet/SagaletMIddleware";

export interface IAppState {
  first: IFirstState
}

const rootReducer = combineReducers<IAppState>({ first: FirstReducer });

function* a() : Iterator<number> {
  yield 2;
}

export function configureStore(): Store<IAppState> {
  const sagaletMiddleware = createSagaletMiddleware();
  const middlewares = [sagaletMiddleware];
  const store = createStore(rootReducer, undefined, applyMiddleware(...middlewares));
  sagaletMiddleware.run(a);
  return store;
}