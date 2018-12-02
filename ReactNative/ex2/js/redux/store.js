import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-saga'
import reduceSession from './reduceSession'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

// const reducers = combineReducers({reducerCurrency, reducerSchedule})
const store = createStore(reduceSession, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store