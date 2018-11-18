import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-saga'
import reducer from './reducer_currency'
import saga from './saga/saga'
import {navReducer, middleware} from '../navigation'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
// TODO debug => add logger

const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store
