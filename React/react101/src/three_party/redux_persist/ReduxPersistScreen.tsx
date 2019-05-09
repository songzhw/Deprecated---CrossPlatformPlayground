import React from "react";
import { connect } from "react-redux";

interface IProps {
  dispatch: any
}

export const ReduxPersistRawScreen = (props: IProps) => {

  function save1() {
    props.dispatch({ type: "BOOK_ADD", id: 22, name: "harry", status: "unread" });
  }

  return (
    <div>
      <button onClick={save1}>Save 01</button>
    </div>
  );


};


export const ReduxPersistScreen = connect()(ReduxPersistRawScreen);
