import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-saga'
import reducerCurrency from './reducer_currency'
import reducerSchedule from './reducer_schedule'
import saga from './saga/saga'
// Unable to resolve "reducer_currency" from "app/redux/store.js"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const reducers = combineReducers({reducerCurrency, reducerSchedule})
const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store
