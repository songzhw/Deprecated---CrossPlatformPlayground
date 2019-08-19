import React, { useEffect, useRef, useState } from "react";

export function CountPitfall() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  function setIntervalTime() {
    setDelay(prev => prev + 500);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setIntervalTime}> set interval time</button>
    </div>
  );
}

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(() => {
  });

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    console.log(`szw useEffect(fn, [delay])`);
    const id = setInterval(tick, delay);
    return () => {
      console.log(`szw useEffect(fn, [delay]): unsubscribe`);
      clearInterval(id);
    };
  }, [delay]);
}