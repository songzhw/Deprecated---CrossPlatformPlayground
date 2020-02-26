import Dexie from "dexie";

// https://dexie.org/docs/Version/Version.stores()
// stores()中是"表名: "主键,索引字段1,索引字段2, ...""
export const idb2 = new Dexie("books");
idb2.version(1).stores({
  bookmarks: "bookName"
});
// 这个bookName就是主键!
