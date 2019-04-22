import React, { useCallback, useState } from "react";

export const UseCallbackDemo = () => {

  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);

  const memorized = useCallback(() => num, [count]);
  const text = `original number = ${num}; count = ${count};  memorized() = ${memorized()}`;
  return (
    <>
      <p> {text} </p>
      <button onClick={() => setCount(count + 1)}> count + 1</button>
      <button onClick={() => setNum(num + 1)}> number + 1</button>
    </>
  );
};