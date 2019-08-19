import React, { useState } from "react";

let intervalHandler = 0;

export const IntervalPitfall = () => {
  const [time, setTime] = useState(60);

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
      intervalHandler = 0;
    } else {
      // @ts-ignore
      // tslint:disable-next-line:only-arrow-functions
      intervalHandler = setInterval(function() {
        console.log(`szw time =`, time, '; interval = ', intervalHandler);
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

