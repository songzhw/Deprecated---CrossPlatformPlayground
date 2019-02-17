import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import F8Reducer from "./F8Reducer";
import {httpMiddleware} from "./middlewares/HttpMIddlewares";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, httpMiddleware];

const reducers = combineReducers({
  F8Reducer
})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;