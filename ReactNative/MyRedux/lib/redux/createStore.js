// store = {dispatch, getState, subscribe}  (replaceReducer就先不管, 用得极少)
// 页面可以订阅store, 来得到通知. 所以Store本身就是个observer模式

// TODO 入参 - 还要加入middleware的概念
export const createStore = (reducer) => {
  let listenerList = [];
  let state;

  const getState = () => state;

  const dispatch = (action) => {
    //TODO 这里要考虑combineReducers()带来的多层问题
    state = reducer(state, action);
    listenerList.forEach(listener => listener());
  };

  /** @return the unsubscribe method*/
  const subscribe = (listener) => {
    listener.push(listener);
    return () => {
      listenerList = listenerList.filter(item => item !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};
