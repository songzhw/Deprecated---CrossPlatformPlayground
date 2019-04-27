import { FirstReducer, IFirstState } from "../screen/first/FirstReducer";
import { combineReducers, createStore, Store } from "redux";

export interface IAppState {
  first: IFirstState
}

const rootReducer = combineReducers<IAppState>({ first: FirstReducer });

export function configureStore(): Store<IAppState> {
  const store = createStore(rootReducer, undefined, undefined);
  return store;
}