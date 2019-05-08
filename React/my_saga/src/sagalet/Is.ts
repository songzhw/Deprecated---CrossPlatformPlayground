export const isFunction = (obj: any) => typeof obj === "function";

export const isPromise = (obj: any) => obj && isFunction(obj.then);
