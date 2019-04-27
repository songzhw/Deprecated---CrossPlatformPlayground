import { IAppState } from "../core/store";
import { Store } from "redux";

export const sagaletMiddleware = (store: Store<IAppState>) => (next: any) => (action: any) => {
  console.log(`szw sagalet middleware : ${JSON.stringify(action)}`);
  return next(action);
};

