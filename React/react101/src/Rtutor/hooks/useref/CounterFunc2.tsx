import React, { useEffect, useRef, useState } from "react";

export function CounterFunc2() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      console.log("useEffect() ", latestCount.current);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        点击 3 次
      </button>
    </div>
  );
}

