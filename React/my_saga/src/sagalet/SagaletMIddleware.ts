import { IAppState } from "../core/store";
import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";

// MiddlewareAPI的定义:  type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }, 和store很像吧, 只是没有注册方法而已
export const sagaletMiddleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  console.log(`szw sagalet middleware : ${JSON.stringify(action)}`);
  return next(action);
};

