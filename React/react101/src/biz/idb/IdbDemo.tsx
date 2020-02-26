import React from "react";
import { idb } from "./idb";

export class IdbDemo extends React.Component {
  state = {};

  componentWillMount() {
    idb.table("todos")
      .toArray()
      .then(data => console.log("table : ", data));
  }


  addData = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const title = `${date.getHours()}:${date.getMinutes()}`;
    const todo = { title, isDone: false };
    idb.table("todos")
      .add(todo)
      .then(id => console.log(`the new id = ${id}`));
  };

  render() {
    return (
      <div>
        <button onClick={this.addData}>add</button>
      </div>
    );
  }
}
