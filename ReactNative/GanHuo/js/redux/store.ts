import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducerGanHuo from './reduxGanHuo'
import reducerSettings from './reduxSettings'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerGanHuo, reducerSettings
})

const store = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(saga);

export default store

// TODO
export interface IReduxState {
  reducerGanHuo: any,
  reducerSettings: any
}