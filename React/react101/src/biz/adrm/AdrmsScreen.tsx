import React, { useEffect, useState } from "react";
import { http } from "../download2/HttpEngine";
import { did, uid, kid } from "./ids";
import * as JSZip from "jszip";

import CryptoJS, { LibWordArray, WordArray } from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";
import { byteArrayToWordArray, wordArrayToByteArray } from "./CryptoUtils";
import { ShapeOutsideProperty } from "csstype";


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
      const url2 = `https://songzhw.github.io/repo/sj.epub`;
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
          const path = "ops/9781451648553.opf";
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

    function onClickIndex() {
      // @ts-ignore
      const sha256 = SHA256(did + uid) as LibWordArray;
      console.log(`szw 01, `, sha256.toString());
      const length = sha256.toString().length;

      const k1 = sha256.toString().substr(length - 32);
      console.log(`szw 02, `, k1);

      // const bytes1 = wordArrayToByteArray(sha256);
      // const start = bytes1.length - 16;
      // const k1_ = [];
      // for (let x = start; x < bytes1.length; x++) {
      //   k1_[x - start] = bytes1[x];
      // }
      // const k1 = byteArrayToWordArray(k1_);
      // // const k1 = Hex.stringify(k1_);
      // console.log(`szw 02, `, k1);

      // =======================
      const rawD1 = Base64.parse(kid);
      console.log(`szw 03, `, Base64.stringify(rawD1));
      // =======================
      const mykey = AES.decrypt(rawD1, k1, { mode: ECB, padding: CryptoJS.pad.NoPadding });
      console.log(`szw 04, `, mykey);
      // =======================

    }

    return (
      <div>
        <p>{info}</p>
        <button onClick={onClickDownload}> download book</button>
        <button onClick={onClickReadPackage}>read zip</button>
        <button onClick={onClickIndex}>index</button>
      </div>
    );
  }
;
