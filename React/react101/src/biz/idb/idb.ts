import Dexie from "dexie";

// https://dexie.org/docs/Version/Version.stores()
// stores()中是"表名: "主键,索引字段1,索引字段2, ...""
export const idb = new Dexie("react101");
idb.version(1).stores({
  todos: "++id, title"
});
