import React from "react";

function parent() {
  let _val: any;

  return {
    myState(initState: any) {
      _val = _val || initState;

      function setValue(value: any) {
        _val = value;
      }

      return [_val, setValue];
    }
  };
}

export const MyReact = parent();
// ========================================
export const MyStateScreen = () => {
  const [count, setCount] = MyReact.myState(10);
  const [timeToRefresh, setTimeToRefresh] = React.useState(false); //辅助用, 主要让页面来更新

  function click() {
    const newValue = count + 10;
    setCount(newValue);
    setTimeToRefresh(!timeToRefresh); //不加这个, 我们自制的myState并不能强制页面更新啊!
  }

  return (
    <div>
      <p style={{ fontSize: 30 }}> {count}</p>
      <button onClick={click}> increase</button>
    </div>
  );
};