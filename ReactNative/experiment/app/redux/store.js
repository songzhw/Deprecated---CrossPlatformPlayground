import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-saga'
import reducer from './reducer_currency'
import saga from './saga/saga'
import {reduxNavReducer, reduxNavMiddleware} from '../navigation'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
// TODO debug => add logger

const rootReducer = combineReducer({
  nav: reduxNavReducer,
  ...
})

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store
