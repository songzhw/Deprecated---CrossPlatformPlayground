import { AnyAction } from "redux";

export const CALL = "call";
export const PUT = "put";
export const TAKE = "take";

export function take<T extends AnyAction>(actionType: string, handlerFunc: (action: T) => Iterator<any>) {
  return [TAKE, actionType, handlerFunc];
}

export function put(action: AnyAction) {
  return [PUT, action];
}

/*
[额外说明]
  1. 这里我确实只要个函数, 任意函数都行, 所以不适合使用(one: number) => number这样明确的定义
  2. 这里说是function, 但我试过, 传入function行, 传入arraow function也是行的!
  3. 用Function也行, 用(...params: any[])=> any也行!
 */
// tslint:disable-next-line:ban-types
export function call(func: Function, ...args: any) {
  return [CALL, func, args];
}


