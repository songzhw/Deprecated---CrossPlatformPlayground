import { AnyAction } from "redux";

export const TAKE = "take";

export function take<T extends AnyAction>(actionType: string, handlerFunc: (action: T) => Iterator<any>) {
  return [TAKE, actionType, handlerFunc];
}
