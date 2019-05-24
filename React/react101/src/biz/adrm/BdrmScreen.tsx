import React, { useEffect, useState } from "react";
import { http } from "../download2/HttpEngine";
import { did, kid, uid } from "./ids";
import * as JSZip from "jszip";

import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";
import Base64 from "crypto-js/enc-base64";
import { arrayBufferToBase64, byteArrayToWordArray, u8aryToWordArray, wordArrayToByteArray } from "./CryptoUtils";

const BOOK = "book";
export const BdrmsScreen: React.FC = () => {
    const [info, setInfo] = useState("-----");
    const [db, setDb] = useState<IDBDatabase>();
    const [image, setImage] = useState();

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

    function onClickDesp() {
      const sha256 = SHA256(did + uid);
      console.log(`szw 01, `, sha256);
      console.log(`szw 01, `, sha256.toString());
      const length = sha256.toString().length;

      // @ts-ignore
      const bytes = wordArrayToByteArray(sha256);
      // console.log("szw 05 : ", bytes);
      const start = bytes.length - 16;
      const k1 = [];
      for (let x = start; x < bytes.length; x++) {
        k1[x - start] = bytes[x];
      }
      // console.log(`szw 03`, k1);
      const rawKey = byteArrayToWordArray(k1);
      console.log(`szw 0x `, rawKey);
      // =======================
      // @ts-ignore
      const mykey = AES.decrypt(kid, rawKey, { mode: ECB, padding: CryptoJS.pad.NoPadding });
      console.log(`szw 02, mykey = `, mykey.toString(Hex));
      // =======================

      if (db) {
        const transaction = db.transaction(BOOK, "readwrite");
        const objectStore = transaction.objectStore(BOOK);
        const request = objectStore.get(1);
        request.onerror = err => console.dir(err);
        request.onsuccess = (ev: Event) => {
          const ebook = (ev.target as IDBRequest).result;
          const path = "ops/xhtml/des.html";
          JSZip.loadAsync(ebook)
            .then(zip => {
              return zip.file(path)
                .async("arraybuffer");
            })
            .then(arraybuffer => {
              // console.log("szw content = ", text);
              // const src = Base64.stringify(Utf8.parse(text));  // error: Malformed UTF-8 data
              // const src = Base64.stringify(text);   // error: TypeError: wordArray.clamp is not a function

              const encrypted = arrayBufferToBase64(arraybuffer);
              // @ts-ignore
              const mytext = AES.decrypt(encrypted, mykey, { mode: ECB, padding: Pkcs7 });
              console.log(`szre result = `, mytext.toString(Utf8));

            });

        };
      }

    }

    function onClickImage() {
      const sha256 = SHA256(did + uid);
      // @ts-ignore
      const bytes = wordArrayToByteArray(sha256);
      const start = bytes.length - 16;
      const k1 = [];
      for (let x = start; x < bytes.length; x++) {
        k1[x - start] = bytes[x];
      }
      const rawKey = byteArrayToWordArray(k1);
      // @ts-ignore
      const mykey = AES.decrypt(kid, rawKey, { mode: ECB, padding: CryptoJS.pad.NoPadding });
      console.log(`szw 02, mykey = `, mykey.toString(Hex));
      // =======================

      if (db) {
        const transaction = db.transaction(BOOK, "readwrite");
        const objectStore = transaction.objectStore(BOOK);
        const request = objectStore.get(1);
        request.onerror = err => console.dir(err);
        request.onsuccess = (ev: Event) => {
          const ebook = (ev.target as IDBRequest).result;
          const path = "ops/images/description.jpg";
          JSZip.loadAsync(ebook)
            .then(zip => {
              return zip.file(path)
                .async("arraybuffer");
            })
            .then(arraybuffer => {
              // const imageBytes = new Uint8Array(arraybuffer);
              // const imageUtf8 = u8aryToWordArray(imageBytes);
              // const imageBase64 = Base64.stringify(imageUtf8); // ERROR: Unhandled Rejection (TypeError): wordArray.clamp is not a function

              const encrypted = arrayBufferToBase64(arraybuffer); //像是base64格式
              console.log(`szw enImg `, encrypted);

              // @ts-ignore
              const myimage = AES.decrypt(encrypted, mykey, { mode: ECB, padding: Pkcs7 });
              // console.log(`szre result2 = `, myimage);

              // const urlInMemory = URL.createObjectURL(myimage);

              const resultBase64 = myimage.toString(Base64);
              const urlInMemory = "data:image/jpeg;base64, " + resultBase64;

              setImage(urlInMemory);
            });

        };
      }
    }

    return (
      <div>
        <p>{info}</p>
        <button onClick={onClickDownload}> download book</button>
        <button onClick={onClickReadPackage}>read zip</button>
        <button onClick={onClickDesp}>description</button>
        <button onClick={onClickImage}>image</button>
        <p/>
        <img height={600} width={600} src={image} alt=""/>
      </div>
    );
  }
;
