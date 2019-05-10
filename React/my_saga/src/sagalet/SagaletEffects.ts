import { AnyAction } from "redux";

export const CALL = "call";
export const PUT = "put";
export const TAKE = "take";
export const FORK = "fork";

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
export function call(func: (...params: any[]) => any, ...args: any) {
  return [CALL, func, args];
  // 以call(add, 1, 2)为例, 那这里的call()返回一个长度为3的数组. 其中的args其实就是另一个array, 值为[1,2].
}


export function fork(func: (...params: any[]) => any, ...args: any) {
  return [FORK, func, args];
}

