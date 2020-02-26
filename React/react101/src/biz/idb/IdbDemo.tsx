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

  // https://dexie.org/docs/Table/Table.get()
  getData = () => {
    // 注意, 这里只会 returns the first matching result !!
    idb.table("todos")
      .get({ title: "15:14" })
      .then(data => console.log(`get: `, data));
  };

  render() {
    return (
      <div>
        <button onClick={this.addData}>add</button>
        <button onClick={this.getData}>get</button>
      </div>
    );
  }
}
