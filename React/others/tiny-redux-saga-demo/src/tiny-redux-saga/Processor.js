import runEffectMap from "./runEffect";
import { is } from "./util";

const { isEffect, isPromise } = is;

export default function(iterator) {
  const store = this; // 用了fn.call(thisObj, args0), 这的"thisObj"传入的就是middlware中的store. 主要是给put这个effect用的

  genNext();

  function genNext(err, genNextArgs) {
    let temp;
    err && (temp = iterator.throw(err));
    !err && (temp = iterator.next(genNextArgs));

    if (temp.done) return;

    /* 假设只会yield三种类型 */
    /*
      1. promise
      2. effect
      3. 不是1和2
    */
    const value = temp.value;
    console.log("szw processor 0", value);
    if (isPromise(value)) {
      console.log(`processor: 1. promise`);
      value
        .then(success => genNext(null, success))
        .catch(error => genNext(error));
    } else if (isEffect(value)) {
      console.log(`processor: 2. effect`);
      runEffectWithNext(value, genNext, store);
    } else {
      console.log(`processor: 3. else`);
      genNext(null, value);
    }
  }
}

function runEffectWithNext({ type, ...props }, genNext, store) {
  runEffectMap[type](props, genNext, store);
}