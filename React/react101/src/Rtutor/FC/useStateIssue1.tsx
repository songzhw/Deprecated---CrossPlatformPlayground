import React, { useState } from "react";

export const UseStateIssue1 = () => {
  const [num, setNumber] = useState(0);

  function save() {
    const result = 200;
    setNumber(result);
    console.log(`szw number = ${num}`); //=> 0 (可见, 仍是有异步的问题存在哦!)
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={save}>modify number</button>
    </div>
  );
};
