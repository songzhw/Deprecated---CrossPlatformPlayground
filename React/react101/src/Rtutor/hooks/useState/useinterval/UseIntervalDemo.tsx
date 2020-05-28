import React, { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

interface IProps {
}

/*TODO ERROR in this page!!!*/

export const UseIntervalDemo = (props: IProps) => {
  const [time, setTime] = useState(60);

  // ERROR : violate "Call Hooks from React function components." rule. hense click this button would result in an error
  const countDown = () => {
    const fn = () => setTime(time - 1);
    useInterval(fn, 1000);
  };

  return (
    <div>
      <p> 15: {time}</p>
      <button onClick={countDown}> start</button>
    </div>
  );
};