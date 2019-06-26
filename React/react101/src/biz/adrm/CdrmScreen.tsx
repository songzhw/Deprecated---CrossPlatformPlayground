import React, { useEffect, useState } from "react";
import { http } from "../download2/HttpEngine";
import * as JSZip from "jszip";

import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";
import Base64 from "crypto-js/enc-base64";
import {
  arrayBufferToBase64, base64ToArrayBuffer, base64toBlob,
  byteArrayToWordArray, u8aryToWordArray,
  wordArrayToByteArray
} from "./CryptoUtils";
import { d2id, i2id, i2name, u2id } from "./id_rtm";

const BOOK2 = "book2";
export const CdrmsScreen: React.FC = () => {
  const [info, setInfo] = useState("-----");
  const [db, setDb] = useState<IDBDatabase>();
  const [image, setImage] = useState("");

  useEffect(() => {
    const openRequest = indexedDB.open("demo01", 2);
    openRequest.onupgradeneeded = (ev: Event) => {
      const _db = (ev.target as IDBOpenDBRequest).result;
      console.log(`szw upgrade `, _db);
      if (!_db.objectStoreNames.contains(BOOK2)) {
        console.log(`szw create book2 table`);
        _db.createObjectStore(BOOK2, { autoIncrement: true });
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
    const url2 = `https://songzhw.github.io/repo/rtm.epub`; //1583405 bytes
    http(url2)
      .then(arraybufferData => {
        if (db) {
          const transaction = db.transaction(BOOK2, "readwrite");
          const objectStore = transaction.objectStore(BOOK2);
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

  function onClickImage() {
    const sha256 = SHA256(d2id + u2id);
    // @ts-ignore
    const bytes = wordArrayToByteArray(sha256);
    const start = bytes.length - 16;
    const k1 = [];
    for (let x = start; x < bytes.length; x++) {
      k1[x - start] = bytes[x];
    }
    const rawKey = byteArrayToWordArray(k1);
    // @ts-ignore
    const mykey = AES.decrypt(i2id, rawKey, { mode: ECB, padding: CryptoJS.pad.NoPadding });

    if (db) {
      const transaction = db.transaction(BOOK2, "readwrite");
      const objectStore = transaction.objectStore(BOOK2);
      const request = objectStore.get(1);
      request.onerror = err => console.dir(err);
      request.onsuccess = (ev: Event) => {
        const ebook = (ev.target as IDBRequest).result;
        JSZip.loadAsync(ebook)
          .then(zip => {
            return zip.file(i2name)
              .async("arraybuffer");
            // .async("uint8array");
          })
          .then(arraybuffer => {
            const imageBase64 = arrayBufferToBase64(arraybuffer);
            // @ts-ignore
            const myimage = AES.decrypt(imageBase64, mykey, { mode: ECB, padding: Pkcs7 });
            const resultBase64 = myimage.toString(Base64);
            console.log(`szw myimage2 = `, resultBase64);
            const blob = base64toBlob(resultBase64, "image/jpeg");
            const url = URL.createObjectURL(blob);
            console.log(`szw urlInMemory = `, url);
            setImage(url);
          });

      };
    }
  }

  return (
    <div>
      <p>{info}</p>
      <button onClick={onClickDownload} style={{ fontSize: 18, marginLeft: 5 }}> download book</button>
      <button onClick={onClickImage} style={{ fontSize: 18, marginLeft: 20 }}>image</button>
      <p/>
      <img src={image} alt="desp.jpg" style={{width: 340, height: 380}}/>
      <p/>
    </div>
  );
};
