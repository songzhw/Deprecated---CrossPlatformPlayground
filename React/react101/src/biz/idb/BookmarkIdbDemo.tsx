import React from "react";
import { idb2 } from "./BookmarkIdb";

export class BookmarkIdbDemo extends React.Component {
  state = {};

  componentWillMount() {
    idb2.table("bookmarks")
      .toArray()
      .then(data => console.log("bookmarks table : ", data));
  }


  addData = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const bookName = "六朝14";
    const bookmark = `OPS/chap1.html||201.${time}`;
    const bookmarkEntry = { bookName, bookmark };
    idb2.table("bookmarks")
      .add(bookmarkEntry)
      .then(id => console.log(`the new id = ${id}`));
  };

  // https://dexie.org/docs/Table/Table.get()
  getData = () => {
    // 注意, 这里只会 returns the first matching result !!
    idb2.table("bookmarks")
      .get({ bookName: "六朝14" })
      .then(data => console.log(`get: `, data));
  };

    // https://dexie.org/docs/Table/Table.update()
    updateData = () => {
      // update(id) need the primary key!
      idb2.table("bookmarks")
        .update("六朝14", { bookmark: "OPS/chap2.html||548.15:47" })
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
