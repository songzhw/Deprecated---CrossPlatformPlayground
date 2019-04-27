import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../core/store";

export const FirstScreen__ = () => {
  function fetchId() {
  }

  return (
    <div>
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

export const FirstScreen = connect(mapStateToProps)(FirstScreen__);