import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reduceSession from './reduceSession'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// const reducers = combineReducers({reducerCurrency, reducerSchedule})
const store = createStore(reduceSession, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;