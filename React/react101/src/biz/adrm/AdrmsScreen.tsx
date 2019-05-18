import React, { useEffect, useState } from "react";
import { http } from "../download2/HttpEngine";
import * as JSZip from "jszip";

const BOOK = "book";
export const AdrmsScreen: React.FC = () => {
    const [info, setInfo] = useState("-----");
    const [db, setDb] = useState<IDBDatabase>();

    useEffect(() => {
      const openRequest = indexedDB.open("demo01", 1);
      openRequest.onupgradeneeded = (ev: Event) => {
        const _db = (ev.target as IDBOpenDBRequest).result;
        console.log(`szw upgrade `, _db);
        if (!_db.objectStoreNames.contains(BOOK)) {
          _db.createObjectStore(BOOK, { autoIncrement: true });
        }
        setDb(_db);
      };

      openRequest.onsuccess = (ev: Event) => {
        const _db = (ev.target as IDBOpenDBRequest).result;
        console.log(`szw success `, _db);
        setDb(_db);
        console.dir(_db.objectStoreNames);
      };

      openRequest.onerror = (err) => {
        console.log(`szw error `, err);
        console.dir(err); //console.dir() 在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。
      };
    }, []);

    function onClickDownload() {
      const url2 = `https://songzhw.github.io/repo/sj.epub?${Math.random()}`;
      // const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
      console.log(`szw url: `, url2);
      http(url2)
        .then(arraybufferData => {
          if (db) {
            const transaction = db.transaction(BOOK, "readwrite");
            const objectStore = transaction.objectStore(BOOK);
            const request = objectStore.add(arraybufferData);
            request.onerror = (ev: any) => {
              console.log("szw save book - error ", ev.target.error.name);
            };

            request.onsuccess = ev => {
              console.log("szw save book successfully");
            };
          }
          setInfo("donwload finished");
        });
    }

    function onClickReadPackage() {
      if (db) {
        const transaction = db.transaction(BOOK, "readwrite");
        const objectStore = transaction.objectStore(BOOK);
        const request = objectStore.get(1);
        request.onerror = err => console.dir(err);
        request.onsuccess = (ev: Event) => {
          const ebook = (ev.target as IDBRequest).result;
          console.log(`szw book = `);
          console.dir(ebook);
          const path = "OPS/package.opf";
          JSZip.loadAsync(ebook)
            .then(zip => {
              return zip.file(path)
                .async("text");
            })
            .then(text => {
              console.log("szw content = ", text);
            });

        };
      }
    }

    return (
      <div>
        <p>{info}</p>
        <button onClick={onClickDownload}> download book</button>
        <button onClick={onClickReadPackage}>read zip</button>
      </div>
    );
  }
;