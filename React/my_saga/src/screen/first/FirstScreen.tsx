import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../core/store";
import { createFirstAddAction, IFirstAddAction } from "./FirstReducer";
import { Dispatch } from "redux";

interface IProps {
  added: number;
  add: (n1: number, n2: number)=>void
}

export const FirstScreen__: React.FC<IProps> = (props: IProps) => {
  function fetchId() {
    props.add(1, 2);
  }

  return (
    <div>
      <p>${props.added}</p>
      <button onClick={fetchId}>fetch id</button>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  console.log(`szw firstScreen mapStateToProps() : ${JSON.stringify(state)} `);
  return {
    added: state.first.addedResult
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    add: (num1: number, num2: number) => {
      const action = createFirstAddAction(num1, num2);
      dispatch(action);
    }

  };
};

export const FirstScreen = connect(mapStateToProps, mapDispatchToProps)(FirstScreen__);