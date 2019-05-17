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
    const rawEncrypted = AES.encrypt(src, key, { iv, mode: CryptoJS.mode.CBC, padding: Pkcs7 });

    // encrypted是WordArray类型, 不适合阅读与传递给他人, 所以转一下
    // astring = Base64.stringify(encrypted);// 但不能直接用base64转, 会有问题 - TypeError: wordArray.clamp is not a function
    encrypted = rawEncrypted.ciphertext.toString();
    setResult(encrypted);
  }

  function onClickCbcPKCS72() {
    // 对wordArray.ciphertext.toString(), 要还原为utf格式, 得先用hex, 再用base64
    const encryptedHexStr = Hex.parse(encrypted);
    // 将密文转为Base64的字符串, 只有Base64类型的字符串密文才能对其进行解密
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { iv, mode: CryptoJS.mode.CBC, padding: Pkcs7 });
    decrypted = rawDecrypted.toString(Utf8);
    console.log(`de = `, decrypted);
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
      <button onClick={onClickEcbPKCS71}>AES/ECB/PKCS7 encrypt</button>
      <button onClick={onClickEcbPKCS72}>AES/ECB/PKCS7 decrypt</button>
      <p/>
      <button onClick={onClickCbcPKCS71}>AES/CBC/PKCS7 encrypt</button>
      <button onClick={onClickCbcPKCS72}>AES/CBC/PKCS7 decrypt</button>
    </div>
  );
};
