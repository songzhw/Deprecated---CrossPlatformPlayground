import React, {ChangeEvent} from "react";
import {ShapeOutsideProperty} from "csstype";

interface IProps {
}

export const TodoScreen = (props: IProps) => {

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value)
  }

  function add() {

  }

  return (
    <div>
      <button onClick={add}>add item</button>
      <input placeholder={"add one item to do"} type={"text"} onChange={onTextChange}/>
    </div>
  )
}

