import React, { useState } from "react";

let intervalHandler = 0;

interface IProps {
}

export const IntervalPitfall = (props: IProps) => {
  const [time, setTime] = useState(60);

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
    } else {
      // @ts-ignore
      intervalHandler = setInterval(() => {
        console.log(`szw time =`, time);
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

