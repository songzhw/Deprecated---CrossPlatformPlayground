import React, { useState } from "react";

export const LetConst_Problem = () => {
  const [num, setNum] = useState(0);
  let db : number;

  function onSave() {
    db = 10;
  }

  function onGet() {
    console.log(`id = ${db}`);
  }

  function onModifyState() {
    setNum(22);
  }

  return (
    <div>
      <p> state.num = {num} </p>
      <button onClick={onSave}>id = 10</button>
      <button onClick={onGet}>show id </button>
      <button onClick={onModifyState}>setState(22)</button>
    </div>
  );
};
