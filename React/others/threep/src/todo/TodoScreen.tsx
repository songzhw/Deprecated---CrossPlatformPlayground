import React, { ChangeEvent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { IAppState } from "./TodoReducer";
import { Dispatch } from "redux";

interface _IProps {
}

type IProps = _IProps
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

export const _TodoScreen = (props: IProps) => {
  let inputString = "";

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    inputString = e.currentTarget.value;
  }

  function add() {
    props.actions.add(inputString);
  }

  return (
    <div>
      <button onClick={add}>add item</button>
      <input placeholder={"add one item to do"} type={"text"} onChange={onTextChange}/>
    </div>
  );
};

function mapStateToProps(state: IAppState) {
  console.log(`mapStateToProps `, state);
  return { data: state.items };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      add: (text: string) => dispatch({ type: "ADD", payload: text })
    }
  };
}

export const TodoScreen = connect(mapStateToProps, mapDispatchToProps)(_TodoScreen);

