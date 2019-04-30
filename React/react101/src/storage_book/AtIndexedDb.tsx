import React, { useEffect } from "react";

export const AtIndexedDB = () => {
  function isIdbOK() {
    return "indexedDB" in window &&
      !/iPad|iPhone|iPod/.test(navigator.platform);
  }

  let db : IDBDatabase;

  useEffect(() => {
    if (!isIdbOK()) {
      return;
    }

    const openRequest = indexedDB.open("demo01", 1);
    openRequest.onupgradeneeded = (ev) => {
      console.log("running onupgradeneeded");
    };

    openRequest.onsuccess = (ev: Event) => {
      db = (ev.target as IDBOpenDBRequest).result;
    };

    openRequest.onerror = (err) => {
      console.dir(err); //console.dir() 在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。
    };

  }, []);

  return (
    <div>
      <p>idb</p>
    </div>);
};