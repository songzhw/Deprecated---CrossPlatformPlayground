import React, { ChangeEvent } from "react";

interface IProps {
}

export const TodoScreen = (props: IProps) => {
  let inputString = "";

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    inputString = e.currentTarget.value;
  }

  function add() {
    console.log(`add : `, inputString);
  }

  return (
    <div>
      <button onClick={add}>add item</button>
      <input placeholder={"add one item to do"} type={"text"} onChange={onTextChange}/>
    </div>
  );
};

