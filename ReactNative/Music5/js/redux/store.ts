import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerRecommend, {IRecommendResponse} from './reduxRecommend'
import reducerPlay from './reduxPlay'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerRecommend, reducerPlay
})

const store = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(saga);

export default store

export interface IReduxState {
  responseRecommend: IRecommendResponse,
  reducerPlay: any
}