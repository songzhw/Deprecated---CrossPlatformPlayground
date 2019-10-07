import React, { useEffect, useState } from "react";
/*
这是错误代码.
一开始是显示 15:60
然后点击"start"后, 就总是15:59, 不会倒计时
 */
let intervalHandler = 0;

export const IntervalPitfall = () => {
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
