import React, { useEffect, useRef, useState } from "react";

let intervalHandler = 0;

export const IntervalPitfallFix2 = () => {
  const [time, setTime] = useState(60);
  const latestTime = useRef(time);

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
    } else {
      // @ts-ignore
      intervalHandler = setInterval(() => {
        console.log(`szw time =`, time, "latestTime.ref = ", latestTime.current);
        setTime(latestTime.current);
        latestTime.current = latestTime.current - 1;
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