import channel from './channel.js';
import processor from './Processor.js';
import { take, fork } from './effect.js';

function runTakeEffect({ pattern }, genNext) {
  channel.take({
    pattern,
    cb: args => genNext(null, args)
  })
}

function runCallEffect({ fn, args }, genNext) {
  /* 通常情况fn返回promise */
  fn.call(null, args)
    .then(success => genNext(null, success))
    .catch(error => genNext(error))
}

function runPutEffect({ action }, genNext, store) {
  const { dispatch } = store;
  dispatch(action);
  genNext();
}

function runForkEffect({ saga }, genNext, store) {
  const child = saga();
  processor.call(store, child);
  genNext(null);
}

function runTakeEveryEffect({ pattern, saga }, genNext, store) {
  function *takeEvery() {
    while(true) {
      yield take(pattern);
      yield fork(saga);
    }
  }

  runForkEffect({ saga: takeEvery }, genNext, store);
}

export default {
  'take': runTakeEffect,
  'call': runCallEffect,
  'put': runPutEffect,
  'fork': runForkEffect,
  'takeEvery': runTakeEveryEffect
}