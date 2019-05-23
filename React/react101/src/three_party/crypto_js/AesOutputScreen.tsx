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

export const AesOutputScreen = (props: IProps) => {
  const src = "捨てる前に";
  const key = Utf8.parse("0123456789abcdef");
  const [result, setResult] = useState("...");

  function onClickEncryption() {
    console.log(`key = `, key)
    const rawEncrypted = AES.encrypt(src, key, { mode: ECB, padding: Pkcs7 });
    console.log(`encrypted = `, rawEncrypted);
    const cs = rawEncrypted.ciphertext.toString();
    setResult(cs);

    console.log(`toString = ${rawEncrypted.toString()}`); //=> Base64, len = 44
    console.log(`ciphertext.toString = ${cs}`);  //=> Hex, len = 32

    const back = Hex.parse(cs);
    const nb = Base64.stringify(back);
    console.log(`newBase64 = ${nb}`);  //=> Base64, len = 24
  }

  function onClickDecryption() {
    console.log(`========`, result);
    const nonHex = Hex.parse(result); // 先脱离Hex格式
    const base64 = Base64.stringify(nonHex);
    const de = AES.decrypt(base64, key, { mode: ECB, padding: Pkcs7 });
    console.log(`rawDe1 = `, de);  //=> {sigBytes, words}
    console.log(`rawDe2 = ${de.toString()}`);     //=> e68da8e381a6e3828be5898de381ab
    console.log(`rawDe3 = ${de.toString(Utf8)}`); //=> 捨てる前に

    let ret = de.toString();  //=> e68da8e381a6e3828be5898de381ab
    ret = Hex.parse(ret);     //=> {sigBytes, words}
    ret = Utf8.stringify(ret);
    console.log(`rawDe4 = ${ret}`); //=> 捨てる前に
  }

  return (
    <div>
      <p> {result} </p>
      <p/>
      <p> src = {src} </p>
      <button onClick={onClickEncryption}>encrypt</button>
      <button onClick={onClickDecryption}>decrypt</button>
    </div>
  );
};
