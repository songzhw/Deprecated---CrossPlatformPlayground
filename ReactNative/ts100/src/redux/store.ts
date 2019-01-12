import {createStore, applyMiddleware, combineReducers, Dispatch} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducerFirst, {FirstPageResponse} from "./reducerFirst";
import reducerCha1 from "./reducerCha1";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerCha1, reducerFirst
})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;

export interface DispatchProps {
  dispatch: Dispatch
}

export interface ReduxState {
  reducerCha1: any;
  reducerFirst: FirstPageResponse;
}