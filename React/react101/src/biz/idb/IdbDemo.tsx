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

  // https://dexie.org/docs/Table/Table.update()
  updateData = () => {
    // update(id) need the primary key!
    idb.table("todos")
      .update(3, { isDone: true, title: "15:22" })
      .then(isUpdated => console.log(`isUpdated = `, isUpdated));
    // isUpdated的值:  1 if an object was updated, otherwise 0
  };

  render() {
    return (
      <div>
        <button onClick={this.addData}>add</button>
        <button onClick={this.getData}>get</button>
        <button onClick={this.updateData}>update</button>
      </div>
    );
  }
}
