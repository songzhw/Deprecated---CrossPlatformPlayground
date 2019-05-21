import React, { useState } from "react";
import CryptoJS, { WordArray } from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";

/*
java平台: AES/ECB/NoPadding
  String src = "[easy plaintext]";
  String key = "0123456789abcdef";
  密文: nSA0RU/u2r9dyd5mopht0g==
 */

interface IProps {
}

export const CrossScreen = (props: IProps) => {
  const [result, setResult] = useState("...");

  function onClickDecryptoJava() {
    const encrypted = "nSA0RU/u2r9dyd5mopht0g==";
    const key = "0123456789abcdef";

    const encryptedHexStr = Hex.parse(encrypted);
    const encryptedBase64Str = Base64.stringify(encryptedHexStr);
    const rawDecrypted = AES.decrypt(encryptedBase64Str, key, { mode: ECB, padding: CryptoJS.pad.ZeroPadding });
    const decrypted = rawDecrypted.toString(Utf8);
    setResult(decrypted);


    // 重要点: Hex.parse( ) which creates a WordArray (32bits Words) from a String
    console.log(`szw ===============================`);
    let src = "whatisthis?";
    console.log(`szw 01`, Base64.parse(src));
    src = Hex.parse("nSA0RU/u2r9dyd5mopht0g==");
    console.log(`szw `, src.toString());
    console.log(`szw 02`, Base64.stringify(src));
  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickDecryptoJava}>Decrypt words from Java</button>
    </div>
  );
};
