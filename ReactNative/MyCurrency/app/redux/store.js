import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-saga'
import reducer from 'reducer_currency'
import rootSaga from './saga/saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
// TODO debug => add logger

const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
