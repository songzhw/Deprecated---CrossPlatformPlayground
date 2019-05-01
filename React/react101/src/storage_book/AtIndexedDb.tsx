import React, { useEffect, useState } from "react";

const DEV = "Dev";
const TICKET = "Ticket";

export const AtIndexedDB = () => {
  const [gender, setGender] = useState("female");
  const [ssn, setSsn] = useState("xxx");
  const [title, setTitle] = useState("(none))");

  function isIdbOK() {
    return "indexedDB" in window &&
      !/iPad|iPhone|iPod/.test(navigator.platform);
  }

  function onGenderChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setGender(ev.target.value);
  }

  function onSsnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSsn(ev.target.value);
  }

  function onTitleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setTitle(ev.target.value);
  }

  function onAddDev() {
    const dev = { ssn, gender, created: new Date().getTime() };
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

  function onAddTicket() {

  }

  let db: IDBDatabase;

  useEffect(() => {
    if (!isIdbOK()) {
      return;
    }

    const openRequest = indexedDB.open("demo01", 1);
    openRequest.onupgradeneeded = (ev: Event) => {
      console.log("szw onUpgradeNeeded");
      db = (ev.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(DEV)) {
        const dev = db.createObjectStore(DEV, { autoIncrement: true });
        dev.createIndex("gender", "gener");
        dev.createIndex("ssn", "ssn", { unique: true });
      }
      if (!db.objectStoreNames.contains(TICKET)) {
        const ticket = db.createObjectStore(TICKET, { keyPath: "jiraID", autoIncrement: true });
        ticket.createIndex("title", "title");
      }
    };

    openRequest.onsuccess = (ev: Event) => {
      console.log("szw onSuccess");
      db = (ev.target as IDBOpenDBRequest).result;
      console.dir(db.objectStoreNames);
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
      <button onClick={onAddDev}>Add Dev</button> <p/>
      <input type="text" placeholder="title" onChange={onTitleChange}/>
      <button onClick={onAddTicket}>Add Dev</button>
    </div>);
};
