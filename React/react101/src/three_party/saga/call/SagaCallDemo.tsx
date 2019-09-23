import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
  dispatch: Dispatch
}

const _SagaCallDemo = (props: IProps) => {

  function click1() {
    props.dispatch({ type: "temp001" });
  }

  function click2() {
    props.dispatch({ type: "temp002" });
  }

  return (
    <div>
      <button onClick={click1}> temp 1</button>
      <button onClick={click2}> temp 2</button>
    </div>
  );
};

export const SagaCallDemo = connect()(_SagaCallDemo);
