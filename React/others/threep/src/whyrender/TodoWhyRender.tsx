import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { IAppState, ITodoItem } from "../todo/TodoReducer";
import { Dispatch } from "redux";




interface _IProps {
}

type IProps = _IProps
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

class _TodoWhyRender extends React.PureComponent<IProps> {
  state = {};
  inputString = "";

  onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.inputString = e.currentTarget.value;
  };

  add = () => {
    this.props.actions.add(this.inputString);
  };

  filter = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.actions.filter(e.currentTarget.value);
  };

  comment = () => {
    this.props.actions.comment(this.inputString);
  };

  render() {
    const listView = this.props.data.map((item, index) => {
      const isCompletedText = item.isComplete ? "✔" : "x";
      return (
        <li key={`${index}`}> {isCompletedText} {item.description} </li>
      );
    });

    return (
      <div>
        <select defaultValue={"all"} onChange={this.filter}>
          <option value={"all"}>All</option>
          <option value={"active"}>Active</option>
          <option value={"completed"}>Completed</option>
        </select>
        <button onClick={this.comment}>Comment</button>
        <p/>

        <button onClick={this.add}>add item</button>
        <input placeholder={"add one item to do"} type={"text"} onChange={this.onTextChange}/>
        <ul>{listView}</ul>
      </div>
    );
  }
}

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

function mapStateToProps(state: IAppState) {
  console.log(`mapStateToProps `, state);
  const data = getVisibleTodos(state.items, state.filter);
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


export default connect(mapStateToProps, mapDispatchToProps)(_TodoWhyRender);