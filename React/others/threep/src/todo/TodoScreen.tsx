import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { IAppState, ITodoItem } from "./TodoReducer";
import { Dispatch } from "redux";
import { createSelector } from "reselect";

const whyRender = require("@welldone-software/why-did-you-render");
whyRender(React);

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

  function filter(e: ChangeEvent<HTMLSelectElement>) {
    props.actions.filter(e.currentTarget.value);
  }

  function comment() {
    props.actions.comment(inputString);
  }

  const listView = props.data.map((item, index) => {
    const isCompletedText = item.isComplete ? "✔" : "x";
    return (
      <li key={`${index}`}> {isCompletedText} {item.description} </li>
    );
  });


  console.log(`   [render]`);
  return (
    <div>
      <select defaultValue={"all"} onChange={filter}>
        <option value={"all"}>All</option>
        <option value={"active"}>Active</option>
        <option value={"completed"}>Completed</option>
      </select>
      <button onClick={comment}>Comment</button>
      <p/>

      <button onClick={add}>add item</button>
      <input placeholder={"add one item to do"} type={"text"} onChange={onTextChange}/>
      <ul>{listView}</ul>
    </div>
  );
};
_TodoScreen.whyDidYouRender = true;


const dependencyTodos = (state: IAppState) => state.items;
const dependencyFilter = (state: IAppState) => state.filter;

function getVisibleTodos(todos: ITodoItem[], filter: string) {
  console.log(`   called getVisibleTodos()`);
  switch (filter) {
    case "active":
      return todos.filter(x => !x.isComplete);
    case "completed":
      return todos.filter(x => x.isComplete);
    default:
      return todos;
  }
}

const reselect = createSelector(
  [dependencyTodos, dependencyFilter],
  getVisibleTodos
);

function mapStateToProps(state: IAppState) {
  console.log(`mapStateToProps `, state);
  const data = reselect(state);
  return { data };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      add: (text: string) => dispatch({ type: "ADD", payload: text }),
      filter: (type: string) => dispatch({ type: "FILTER", payload: type }),
      comment: (type: string) => dispatch({ type: "COMMENT", payload: type })
    }
  };
}

const TodoScreen2 = connect(mapStateToProps, mapDispatchToProps)(_TodoScreen);
TodoScreen2.whyDidYouRender = true;
export const TodoScreen = TodoScreen2;

