import React, { useReducer, useState } from "react";

interface IState {
  time: number;
}

interface IAction {
  type: string;
}

const ACTION_COUNT_DOWN = "ACTION_COUNT_DOWN";

function intervalReducer(state: IState, action: IAction) {
  if (action.type === ACTION_COUNT_DOWN) {
    const value = state.time - 1;
    return { time: value };
  }
  return state;
}


let intervalHandler = 0;
export const CountDownReducerScreen = () => {
  // const [time, setTime] = useState(60);
  const [state, dispatch] = useReducer(intervalReducer, { time: 60 });

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
    } else {
      // @ts-ignore
      intervalHandler = setInterval(() => {
        console.log(`szw state =`, state); //=> 值仍总是 {time: 60}
        dispatch({ type: ACTION_COUNT_DOWN });
      }, 1000);
    }
  };

  return (
    <div>
      <p> 15: {state.time}</p>
      <button onClick={countDown}> start</button>
    </div>
  );
};

