import React, { useEffect, useState } from "react";

let intervalHandler = 0;

export const IntervalPitfall = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    console.log(`szw useEffect(): time =`, time);
    console.log(`==============`);
  }, [time]);

  const countDown = () => {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
      intervalHandler = 0;
    } else {
      // @ts-ignore
      intervalHandler = setInterval(() => {
        console.log(`szw within interval() time =`, time, "; interval = ", intervalHandler); //=> always : "time = 60"
        setTime(sec => sec - 1);
      }, 1000);
    }
  };

  console.log(`szw screen re-render, time = `, time);
  return (
    <div>
      <p> 15: {time}</p>
      <button onClick={countDown}> start</button>
    </div>
  );
};

/*
szw within interval() time = 60 ; interval =  11
szw screen re-render, time =  59
szw useEffect(): time = 59
==============

szw within interval() time = 60 ; interval =  11
szw screen re-render, time =  58
szw useEffect(): time = 58
 */

