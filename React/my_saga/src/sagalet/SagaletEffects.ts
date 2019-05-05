import { AnyAction } from "redux";

// export const CALL = "call";
export const PUT = "put";
export const TAKE = "take";

export function take<T extends AnyAction>(actionType: string, handlerFunc: (action: T) => Iterator<any>) {
  return [TAKE, actionType, handlerFunc];
}

export function put(action: AnyAction) {
  return [PUT, action];
}

// export function call(func: (arg: any) => any, ...args: any) {
//   return [CALL, func, args];
// }


