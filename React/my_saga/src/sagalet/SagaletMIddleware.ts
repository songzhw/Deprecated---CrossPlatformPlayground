import { AnyAction, Dispatch, MiddlewareAPI } from "redux";
import { proc } from "./Processor";

export const createSagaletMiddleware = () => {
  let generator: Iterator<any>;

  // MiddlewareAPI的定义:  type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }, 和store很像吧, 只是没有注册方法而已
  const sagaletMiddleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log(`szw sagalet middleware : ${JSON.stringify(action)}`);
    next(action);
    proc(api, generator, action); //要是不想take()有takeEvery的效果, proc()的执行不应该在这. 应该在run()中
  };

  sagaletMiddleware.run = (func: () => Iterator<any>) => {
    generator = func();
  };

  return sagaletMiddleware;
};





