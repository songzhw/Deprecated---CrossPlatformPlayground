import React, { useState } from "react";
import CryptoJS, { WordArray } from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";


interface IProps {
}

export const AesScreen = (props: IProps) => {
  const [result, setResult] = useState("...");

  // AES-128 : key需要得是128位, 换成16进制, 就是128 = 16 * 8, 即得有16个string在这里
  const key = Utf8.parse("0123456789abcdef");
  const iv = Utf8.parse("abcdef9876543210");

  const src = `<html><h1>I'm happy</h1></html>`;
  let encrypted = "";
  let decrypted = "";

  function onClickEcbNoPadding1() {

  }

  function onClickEcbNoPadding2() {

  }

  function onClickEcbPKCS71() {

  }

  function onClickEcbPKCS72() {

  }

  function onClickCbcPKCS71() {
    const utfIn = Utf8.parse(src);
    const rawEncrypted = AES.encrypt(utfIn, key, { iv, mode: CryptoJS.mode.CBC, padding: Pkcs7 });

    // encrypted是WordArray类型, 不适合阅读与传递给他人, 所以转一下
    // astring = Base64.stringify(encrypted);// 但不能直接用base64转, 会有问题 - TypeError: wordArray.clamp is not a function
    encrypted = rawEncrypted.ciphertext.toString();
    setResult(encrypted);
  }

  function onClickCbcPKCS72() {

  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickEcbNoPadding1}>AES/ECB/NoPadding encrypt</button>
      <button onClick={onClickEcbNoPadding2}>AES/ECB/NoPadding decrypt</button>
      <p/>
      <button onClick={onClickEcbPKCS71}>AES/ECB/PKCS7 encrypt</button>
      <button onClick={onClickEcbPKCS72}>AES/ECB/PKCS7 decrypt</button>
      <p/>
      <button onClick={onClickCbcPKCS71}>AES/CBC/PKCS7 encrypt</button>
      <button onClick={onClickCbcPKCS72}>AES/CBC/PKCS7 decrypt</button>
    </div>
  );
};
