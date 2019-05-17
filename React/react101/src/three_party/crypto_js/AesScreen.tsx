import React, { useState } from "react";
import CryptoJS, { WordArray } from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";


interface IProps {
}

export const AesScreen = (props: IProps) => {
  const [result, setResult] = useState("...");
  const [encrypted, setEncrypted] = useState("");

  // AES-128 : key需要得是128位, 换成16进制, 就是128 = 16 * 8, 即得有16个string在这里
  const key = Utf8.parse("0123456789abcdef");
  const iv = Utf8.parse("abcdef9876543210");

  // const src = `<html><h1>I'm happy</h1></html>`;
  const src = "0123456789abcdef";
  let decrypted = "";

  function onClickEcbNoPadding1() {
    const rawEncrypted = AES.encrypt(src, key, { mode: ECB, padding: CryptoJS.pad.NoPadding });
    const tmp = rawEncrypted.ciphertext.toString();
    setEncrypted(tmp);
    setResult(tmp);
  }

  /*
  error:
  no   padding: encrypted = 80b0be5f93faf23e425d09459696151a572a1b65fabb73714c34bf01f77270
  zero padding: encrypted = 80b0be5f93faf23e425d09459696151a572a1b65fabb73714c34bf01f77270c5
  可见二者密码类似, 但分块解密时no padding就会错
   */
  function onClickEcbNoPadding2() {
    const encryptedHexStr = Hex.parse(encrypted);
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { mode: ECB, padding: CryptoJS.pad.NoPadding });
    decrypted = rawDecrypted.toString(Utf8);
    setResult(decrypted);
  }

  function onClickEcbZeroPadding1() {
    const rawEncrypted = AES.encrypt(src, key, { mode: ECB, padding: CryptoJS.pad.ZeroPadding });
    const tmp = rawEncrypted.ciphertext.toString();
    setEncrypted(tmp);
    setResult(tmp);
  }

  function onClickEcbZeroPadding2() {
    const encryptedHexStr = Hex.parse(encrypted);
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { mode: ECB, padding: CryptoJS.pad.ZeroPadding });
    decrypted = rawDecrypted.toString(Utf8);
    setResult(decrypted);
  }

  function onClickEcbPKCS71() {
    const rawEncrypted = AES.encrypt(src, key, { mode: ECB, padding: Pkcs7 });
    const tmp = rawEncrypted.ciphertext.toString();
    setEncrypted(tmp);
    setResult(tmp);
  }

  function onClickEcbPKCS72() {
    const encryptedHexStr = Hex.parse(encrypted);
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { mode: ECB, padding: Pkcs7 });
    decrypted = rawDecrypted.toString(Utf8);
    setResult(decrypted);
  }

  function onClickCbcPKCS71() {
    const rawEncrypted = AES.encrypt(src, key, { iv, mode: CryptoJS.mode.CBC, padding: Pkcs7 });
    const tmp = rawEncrypted.ciphertext.toString();
    setEncrypted(tmp);
    setResult(tmp);
  }

  function onClickCbcPKCS72() {
    const encryptedHexStr = Hex.parse(encrypted);
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { iv, mode: CryptoJS.mode.CBC, padding: Pkcs7 });
    decrypted = rawDecrypted.toString(Utf8);
    setResult(decrypted);
  }


  /**
   * 生成密钥字节数组, 原始密钥字符串不足128位, 补填0.
   * @return Buffer
   */
  const fillKey = (key2: string) => {
    const keySize = key2.length;
    const filledKey = Buffer.alloc(keySize / 8);
    const keys = Buffer.from(key);
    let index = 0;
    while (index < filledKey.length) {
      filledKey[index] = keys[index];
      index += 1;
    }

    return filledKey;
  };

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickEcbNoPadding1}>AES/ECB/NoPadding encrypt</button>
      <button onClick={onClickEcbNoPadding2}>AES/ECB/NoPadding decrypt</button>
      <p/>
      <button onClick={onClickEcbZeroPadding1}>AES/ECB/ZeroPadding encrypt</button>
      <button onClick={onClickEcbZeroPadding2}>AES/ECB/ZeroPadding decrypt</button>
      <p/>
      <button onClick={onClickEcbPKCS71}>AES/ECB/PKCS7 encrypt</button>
      <button onClick={onClickEcbPKCS72}>AES/ECB/PKCS7 decrypt</button>
      <p/>
      <button onClick={onClickCbcPKCS71}>AES/CBC/PKCS7 encrypt</button>
      <button onClick={onClickCbcPKCS72}>AES/CBC/PKCS7 decrypt</button>
    </div>
  );
};
