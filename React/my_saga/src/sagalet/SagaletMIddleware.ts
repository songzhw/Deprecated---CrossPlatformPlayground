import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";

export const createSagaletMiddleware = () => {
  let sagaGenerator: () => Iterator<any>;

  // MiddlewareAPI的定义:  type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }, 和store很像吧, 只是没有注册方法而已
  const sagaletMiddleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log(`szw sagalet middleware : ${JSON.stringify(action)}`);

    const generator = sagaGenerator();
    const { done, value } = generator.next();
    console.log(`szw saga : value = ${value}, isDone = ${done}`);


    return next(action);
  };

  sagaletMiddleware.run = (func: () => Iterator<any>) => {
    sagaGenerator = func;
  };

  return sagaletMiddleware;
};





