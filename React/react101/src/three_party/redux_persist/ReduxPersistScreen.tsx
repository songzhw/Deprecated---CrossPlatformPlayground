import React from "react";
import { connect } from "react-redux";
import { IBookState } from "./rpBookReducer";

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

const mapStateToProps = (state: IBookState) => {
  console.log("book screen ", state);
};


export const ReduxPersistScreen = connect(mapStateToProps)(ReduxPersistRawScreen);
