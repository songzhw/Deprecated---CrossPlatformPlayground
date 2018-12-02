import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduceSession from './reduceSession'
import reduceSchedule from './reduceSchedule'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);  // import logger from 'redux-logger'
// }

const reducers = combineReducers({reduceSession, reduceSchedule})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;