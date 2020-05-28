import React, { useState } from "react";
import { useInterval } from "./useInterval";

interface IProps {
}

export const UseIntervalDemo = (props: IProps) => {
  const [time, setTime] = useState(60);
    const fn = () => setTime(time - 1);
    useInterval(fn, 1000);

  return (
    <div>
      <p> 15: {time}</p>
    </div>
  );
};