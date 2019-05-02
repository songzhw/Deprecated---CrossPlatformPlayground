import { AnyAction } from "redux";

export const TAKE = "take";

export function take(actionType: string, handlerFunc: (action: AnyAction) => Iterator<any>) {
  return [TAKE, actionType, handlerFunc];
}
