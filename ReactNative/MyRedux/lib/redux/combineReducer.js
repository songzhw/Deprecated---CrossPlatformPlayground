// 类似组合模式, 仍要返回一个reducers

/* @param reducers : 格式如: {r1, r2}*/
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers)
      .reduce(
        (accumulatedState, key) => {
          let currentReducer = reducers[key];
          let stateInThisStage = currentReducer(state, action);
          return { ...accumulatedState, [key]: stateInThisStage };
        },
        {});
  };
};

const r1 = (state, action) => {
  return { ...state, id: action.id };
};

const r2 = (state, action) => {
  return { ...state, name: action.name };
};

let state = { r1: { id: 100 }, r2: { name: '200' } };
const reducers = combineReducers({ r1, r2 });
let newState = reducers(state, { id: 23, name: "szw", age: 25 });
console.log(newState);

/*
[Demo 1]
  const r1 = (state, action) => {
    return { ...state, id: action.id };
  };

  const r2 = (state, action) => {
    return { ...state, name: action.name };
  };

  let state = { one: 1, two: 2 };
  const reducers = combineReducers({ r1, r2 });
  let newState = reducers(state, { id: 23, name: "szw", age: 25 });
  console.log(newState);
  //=> { r1: { one: 1, two: 2, id: 23 },
  //     r2: { one: 1, two: 2, name: 'szw' }
  //   }
*/


/*
[Demo 2]

  const r1 = (state, action) => {
    return { ...state, id: action.id };
  };

  const r2 = (state, action) => {
    return { ...state, name: action.name };
  };

  const r3 = (state, action) => {
    return { ...state, color: action.color };
  };

  let state = { one: 1, two: 2 };
  const reducers1 = combineReducers({ r1, r2 });
  const reducers = combineReducers({ reducers1, r3 });
  let newState = reducers(state, { id: 23, name: "szw", age: 25, color: "red" });
  console.log(newState);
  //=> { reducers1:
    //    { r1: { one: 1, two: 2, id: 23 },
    //      r2: { one: 1, two: 2, name: 'szw' } },
    //   r3: { one: 1, two: 2, color: 'red' }
    // }
*/
