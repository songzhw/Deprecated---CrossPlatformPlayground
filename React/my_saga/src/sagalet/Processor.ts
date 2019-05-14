import { Store } from "redux";
import { isPromise } from "./Is";
import { CALL, FORK, PUT, TAKE } from "./SagaletEffects";


export function proc(reduxStore: Store, iterator: Iterator<any>) {


  function __next(gen: Iterator<any>, args: any, isError: boolean) {
    if (isError) {
      // @ts-ignore
      gen.throw(args);
      return;
    }

    const iteratorResult = gen.next(args);
    const { done, value } = iteratorResult;
    if (done) {
      return;
    }

    // = = = = = = = = 1. yield Promise = = = = = = = =
    if (isPromise(value)) {
      value.then((valueInPromise: any) => __next(gen, valueInPromise, false));
      return;
    }


    // = = = = = = = = 2. yield saga effect = = = = = = = =
    const effect = value[0];

    if (effect === TAKE) {
      console.log(`szw TAKE`); // this implementation is actually `takeEvery`
      const typeInterested = value[1];
      if (typeInterested === action.type) {
        const handlerFunc = value[2];
        const secondGenerator = handlerFunc(action);
        __next(secondGenerator, undefined, false);
        // TODO how to resume to the main generator after this is done?
      }
    } else if (effect === PUT) {
      console.log(`szw PUT`);
      const newAction = value[1];
      next(newAction);
      // api.dispatch(newAction);
      __next(gen, undefined, false);
    } else if (effect === CALL) {
      console.log("szw CALL");
      const func = value[1];
      const funcArgs = value[2];
      const funcResult = func.apply(null, funcArgs);
      __next(gen, funcResult, false);
    } else if (effect === FORK) {
      console.log("szw FORK");
      const func = value[1];
      const funcArgs = value[2];
      func.apply(null, funcArgs);
      __next(gen, undefined, false);
    }

  }



}
