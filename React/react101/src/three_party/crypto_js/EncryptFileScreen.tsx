import React, { useState } from "react";
import { http } from "../../biz/download2/HttpEngine";
import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";

interface IProps {
}

export const EncryptFileScreen = (props: IProps) => {
  const [ab, setArrayBuffer] = useState();
  const [en, setEncrypted] = useState();
  const [info, setInfo] = useState("...");

  const key = Utf8.parse("0123456789abcdef");

  function onClickDownload() {
    const downloadUrl = "https://songzhw.github.io/repo/manifest.json";
    http(downloadUrl)
      .then(arraybufferData => {
        setArrayBuffer(arraybufferData);
        setInfo("download successfully");
      });
  }

  function onClickEncrypt() {

  }

  function onClickDecrypt() {

  }


  return (
    <div>
      <p>{info}</p>
      <button onClick={onClickDownload}>download</button>
      <button onClick={onClickEncrypt}>encrypt</button>
      <button onClick={onClickDecrypt}>decrypt</button>
    </div>
  );
};
