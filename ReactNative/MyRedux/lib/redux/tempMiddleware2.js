import { createStore } from "./createStore";

// const addLogToDispatch = (store) => (next) => {
//   return (action) => {
const addLogToDispatch = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("%c previous state", "color: gray", store.getState());
  const ret = next(action);
  console.log("%c next state", "color: green", store.getState());
  console.group(action.type);
  return ret;
};

// const addHttpToDispatch = (store) => (next) => {
//   return (action) => {
const addHttpToDispatch = (store) => (next) => (action) => {
  if (action.type === "ACTION_HTTP_REQUEST") {
    console.log(`Mimic fetch(action.url, action.header, action.body)`);
    let fakeResponseAction = { type: ACTION_HTTP_RESPONSE, payload: { name: "resp" } };
    return next(fakeResponseAction);
  }
};


const configStore3 = (reducer) => {
  const store = createStore(reducer);

  const middlewares = [];
  middlewares.push(addLogToDispatch);
  middlewares.push(addHttpToDispatch);
  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};


const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch));
};
