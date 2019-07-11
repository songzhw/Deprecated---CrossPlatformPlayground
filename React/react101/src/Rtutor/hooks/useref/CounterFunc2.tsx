import React, { useEffect, useRef, useState } from "react";

// 我们通过 useRef(initVal) 来返回一个可变的 ref 对象，其 current 属性被初始化为传递的参数 （initVal）。
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

