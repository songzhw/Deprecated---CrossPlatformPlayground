// 类似组合模式, 仍要返回一个reducers

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
/* @param reducers : 格式如: {r1, r2}*/
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers)
      .reduce(
        (accumulatedState, key) => {
          let currentReducer = reducers[key];
          let stateInThisStage = currentReducer(state[key], action);
          return { ...accumulatedState, [key]: stateInThisStage };
        },
        {});
  };
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

/*
[Demo 1]
  const r1 = (state, action) => {
    return { ...state, id: action.id };
  };

  const r2 = (state, action) => {
    return { ...state, name: action.name };
  };

  let state = { r1: { id: 100, name: "100" }, r2: { id: 200, name: "200" } };
  const reducers = combineReducers({ r1, r2 });
  let newState = reducers(state, { id: 23, name: "szw", age: 25 });
  console.log(newState); //=> { r1: { id: 23, name: '100' }, r2: { id: 200, name: 'szw' } }
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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

  let state = {
    reducers1: { r1: { id: 100, name: "100" }, r2: { id: 200, name: "200" } },
    r3: { id: 300 }
  };
  const reducers1 = combineReducers({ r1, r2 });
  const reducers = combineReducers({ reducers1, r3 });
  let newState = reducers(state, { id: 23, name: "szw", age: 25, color: "red" });
  console.log(newState);
  //=> { reducers1: { r1: { id: 23, name: '100' }, r2: { id: 200, name: 'szw' } },
  //     r3:        { id: 300, color: 'red' }
  //   }
*/
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =