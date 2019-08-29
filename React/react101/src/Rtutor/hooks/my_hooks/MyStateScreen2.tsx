import React from "react";
import { useMyState2 } from "./MyState2";

// 本例不能直接用(会有问题), 但MyState2中的pseudo-code解决为了什么
export const MyStateScreen2 = () => {
  const [count, setCount] = useMyState2(10);
  const [id, setId] = useMyState2(1);
  const [timeToRefresh, setTimeToRefresh] = React.useState(false); //辅助用, 主要让页面来更新

  function click() {
    const newValue = count + 10;
    const newId = id + 1;
    setCount(newValue);
    setId(newId);
    setTimeToRefresh(!timeToRefresh); //不加这个, 我们自制的myState并不能强制页面更新啊!
  }

  return (
    <div>
      <p style={{ fontSize: 30 }}> {id}</p>
      <p style={{ fontSize: 20 }}> {count}</p>
      <button onClick={click}> increase</button>
    </div>
  );
};