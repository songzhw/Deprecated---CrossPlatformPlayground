import React, { useEffect, useState } from "react";

const DEV = "Dev";
const TICKET = "Ticket";

export const AtIndexedDB = () => {
  const [db, setDb] = useState<IDBDatabase>();
  const [gender, setGender] = useState("female");
  const [ssn, setSsn] = useState(0);
  const [title, setTitle] = useState("(none))");
  const [id, setId] = useState<string>("");

  function isIdbOK() {
    return "indexedDB" in window &&
      !/iPad|iPhone|iPod/.test(navigator.platform);
  }

  function onGenderChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setGender(ev.target.value);
  }

  function onSsnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSsn(Number(ev.target.value));
  }

  function onTitleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setTitle(ev.target.value);
  }

  function onGetKey(ev: React.ChangeEvent<HTMLInputElement>) {
    setId(ev.target.value);
  }

  function onAddDev() {
    const dev = { ssn, gender, created: new Date().getTime() };
    console.log("db", db);
    if (db) {
      const transaction = db.transaction(DEV, "readwrite");
      const objectStore = transaction.objectStore(DEV);
      const request = objectStore.add(dev);
      request.onerror = (ev: any) => {
        console.log("szw save dev - error ", ev.target.error.name);
      };

      request.onsuccess = ev => {
        console.log("szw save dev successfully");
      };
    }
  }

  function onAddTicket() {
    const ticket = { jiraID: title, title };
    if (db) {
      const transaction = db.transaction(TICKET, "readonly");
      const objectStore = transaction.objectStore(TICKET);
      const request = objectStore.add(ticket);
    }
  }

  function onGetPerson() {
    if (db) {
      const transaction = db.transaction(DEV, "readwrite");
      const objectStore = transaction.objectStore(DEV);
      const request = objectStore.get(Number(id));
      request.onsuccess = (ev: Event) => console.dir((ev.target as IDBOpenDBRequest).result);
      request.onerror = err => console.dir(err);
    }
  }

  function onUpdateDev() {
    if (db) {
      const transaction = db.transaction(DEV, "readwrite");
      const objectStore = transaction.objectStore(DEV);
      const person = { ssn, gender, created: 333 };
      const request = objectStore.put(person, id);
      request.onsuccess = (ev: Event) => console.dir((ev.target as IDBOpenDBRequest).result);
      request.onerror = err => console.dir(err);
    }
  }


  function onDeleteDev() {
    if (db) {
      const transaction = db.transaction(DEV, "readwrite");
      const objectStore = transaction.objectStore(DEV);
      const request = objectStore.delete(Number(id));
      request.onsuccess = (ev: Event) => console.dir((ev.target as IDBOpenDBRequest).result);
      request.onerror = err => console.dir(err);
    }
  } // 删除一行后再add, 那key仍是在原来最大的key上自增. 如1,2,3三行数据, 删除了key=3的那行, 再新加一个, 其key是4, 不是3


  function onQueryAllDev() {
    if (db) {
      const transaction = db.transaction(DEV, "readwrite");
      const objectStore = transaction.objectStore(DEV);
      const request: IDBRequest = objectStore.openCursor();
      request.onsuccess = (ev: Event) => { // 类似while循环
        console.log(`start`);
        const cursor = (ev.target as IDBRequest).result;
        if (cursor) {
          let buf = cursor.key;
          console.log(`key = `, cursor.key);
          for (let field in cursor.value) {
            buf += " " + cursor.value[field];
          }
          cursor.continue();
          console.log(buf);
        } else {
          console.log(`else`);
        }
      };

      transaction.oncomplete = () => {
        console.log(`query all done!`);
      };

    }
  }

  function onQueryRange() {
    if (!db) {
      return;
    }
    const transaction = db.transaction(DEV, "readwrite");
    const objectStore = transaction.objectStore(DEV);

    const range = IDBKeyRange.bound(100, 600);
    const index = objectStore.index("ssn");
    const request: IDBRequest = index.openCursor(range); //注意, 这里是index做主语, index.openCursor()!
    request.onsuccess = (ev: Event) => { // 类似while循环
      console.log(`start`);
      const cursor = (ev.target as IDBRequest).result;
      if (cursor) {
        let buf = cursor.key;
        console.log(`key = `, cursor.key);
        for (let field in cursor.value) {
          buf += " " + cursor.value[field];
        }
        cursor.continue();
        console.log(buf);
      } else {
        console.log(`else`);
      }
    };

    transaction.oncomplete = () => {
      console.log(`query all done!`);
    };

  }

  useEffect(() => {
    if (!isIdbOK()) {
      return;
    }

    const openRequest = indexedDB.open("demo01", 1);
    openRequest.onupgradeneeded = (ev: Event) => {
      console.log("szw onUpgradeNeeded ");
      const _db = (ev.target as IDBOpenDBRequest).result;
      if (!_db.objectStoreNames.contains(DEV)) {
        const dev = _db.createObjectStore(DEV, { autoIncrement: true });
        dev.createIndex("gender", "gener");
        dev.createIndex("ssn", "ssn", { unique: true });
      }
      if (!_db.objectStoreNames.contains(TICKET)) {
        const ticket = _db.createObjectStore(TICKET, { keyPath: "jiraID" });
        ticket.createIndex("title", "title");
      }
      setDb(_db);
    };

    openRequest.onsuccess = (ev: Event) => {
      console.log("szw onSuccess ");
      const _db = (ev.target as IDBOpenDBRequest).result;
      setDb(_db);
      console.dir(_db.objectStoreNames);
    };

    openRequest.onerror = (err) => {
      console.dir(err); //console.dir() 在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。
    };

  }, []);

  return (
    <div>
      <p>idb</p>
      <input type="text" placeholder="gender" onChange={onGenderChange}/>
      <input type="text" placeholder="ssn" onChange={onSsnChange}/>
      <button onClick={onAddDev}>Add Dev</button>
      <p/>
      <input type="text" placeholder="title" onChange={onTitleChange}/>
      <button onClick={onAddTicket}>Add Dev</button>
      <p/>
      <input type="text" placeholder="id" onChange={onGetKey}/>
      <p/>
      <button onClick={onGetPerson}>Get Dev</button>
      <button onClick={onUpdateDev}>update dev</button>
      <button onClick={onDeleteDev}>delete dev</button>
      <button onClick={onQueryAllDev}> query all dev</button>
      <button onClick={onQueryRange}> query dev (range)</button>
    </div>);
};
