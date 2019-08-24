import React, { useState } from "react";

interface IState {
  num: number;
}

interface IAction {
  type: string;
  payload: number;
}

const ACTION_COUNT_DOWN = "ACTION_COUNT_DOWN";

function intervalReducer(state = { num: 60 }, action: IAction) {
  if (action.type === ACTION_COUNT_DOWN) {
    const value = action.payload - 1;
    return { num: value };
  }
  return state;
}


let intervalHandler = 0;
export const CountDownReducerScreen = () => {
  const [time, setTime] = useState(60);

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
    } else {
      // @ts-ignore
      intervalHandler = setInterval(() => {
        console.log(`szw time =`, time); //time每隔一秒, 打印出来的都是60
        setTime(time - 1);
      }, 1000);
    }
  };

  return (
    <div>
      <p> 15: {time}</p>
      <button onClick={countDown}> start</button>
    </div>
  );
};

