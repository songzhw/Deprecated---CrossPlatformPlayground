import React, { useState } from "react";

export const LetConst_Resolve = () => {
  const [num, setNum] = useState(0);
  const [db, setDb] = useState(0);

  function onSave() {
    setDb(10);
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
      <button onClick={onGet}>show id</button>
      <button onClick={onModifyState}>setState(22)</button>
    </div>
  );
};
