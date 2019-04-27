import { FirstReducer, IFirstState } from "../screen/first/FirstReducer";
import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import { sagaletMiddleware } from "../sagalet/SagaletMIddleware";

export interface IAppState {
  first: IFirstState
}

const rootReducer = combineReducers<IAppState>({ first: FirstReducer });

export function configureStore(): Store<IAppState> {
  const middlewares = [sagaletMiddleware];
  return createStore(rootReducer, undefined, applyMiddleware(...middlewares));
}