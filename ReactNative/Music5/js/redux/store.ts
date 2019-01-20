import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerRecommend, {IRecommendResponse} from './reduxRecommend'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerRecommend
})

const store = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(saga);

export default store

export interface IReduxState {
  reducerRecommend: IRecommendResponse
}