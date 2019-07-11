import React, { useEffect, useState } from "react";

// try swap the button
export function CounterFunc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("useEffect() : ", count);
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



