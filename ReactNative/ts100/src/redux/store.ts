import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducerFirst, {FirstPageResponse} from "./reducerFirst";
import reducerLogin from "./reducerLogin";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerLogin, reducerFirst
})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;

export interface ReduxState {
  reducerLogin: any;
  reducerFirst: FirstPageResponse;
}