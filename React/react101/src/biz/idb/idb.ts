import Dexie from "dexie";

export const idb = new Dexie("react101");
idb.version(1).stores({
  todos: "++id, title"
});
