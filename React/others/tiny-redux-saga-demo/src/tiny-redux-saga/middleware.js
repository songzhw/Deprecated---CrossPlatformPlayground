import channel from './channel.js';
import processor from './Processor.js';

function createSagaMiddleware() {
  let _store = null;
  const sagaMiddleware = store => {
    _store = store;
    return next => action => {
      next(action);
      
      const { type, ...payload } = action;
      console.log(`szw middleware put: ${type}`)
      channel.put(type, payload);
    }
  } 

  sagaMiddleware.run = saga => {
    const iterator = saga();
    processor.call(_store, iterator);
  }

  return sagaMiddleware;
} 

export default createSagaMiddleware;