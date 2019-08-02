import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { IAppState, ITodoItem } from "./TodoReducer";
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

  function filter(e: ChangeEvent<HTMLSelectElement>) {
    props.actions.filter(e.currentTarget.value);
  }

  const listView = props.data.map((item, index) => {
    const isCompletedText = item.isComplete ? "✔" : "x";
    return (
      <li key={`${index}`}> {isCompletedText} {item.description} </li>
    );
  });

  return (
    <div>
      <select defaultValue={"all"} onChange={filter}>
        <option value={"all"}>All</option>
        <option value={"active"}>Active</option>
        <option value={"completed"}>Completed</option>
      </select>
      <p/>
      <button onClick={add}>add item</button>
      <input placeholder={"add one item to do"} type={"text"} onChange={onTextChange}/>
      <ul>{listView}</ul>
    </div>
  );
};

function getVisibleTodos(todos: ITodoItem[], filter: string)  {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter(x => !x.isComplete);
    case "completed":
      return todos.filter(x => x.isComplete);
    default:
      return todos;
  }
}

function mapStateToProps(state: IAppState) {
  console.log(`mapStateToProps `, state);
  const data = getVisibleTodos(state.items, state.filter);
  return { data };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      add: (text: string) => dispatch({ type: "ADD", payload: text }),
      filter: (type: string) => dispatch({ type: "FILTER", payload: type })
    }
  };
}

export const TodoScreen = connect(mapStateToProps, mapDispatchToProps)(_TodoScreen);

