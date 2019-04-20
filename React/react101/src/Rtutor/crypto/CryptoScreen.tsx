import React, { useState } from "react";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";

interface IProps {

}

export const CryptoScreen: React.FC<IProps> = (props: IProps) => {
  const src = "Hello, javascript security";

  const [result, setResult] = useState("");

  function base64() {
    const wordArray = Utf8.parse(src); //=> 48656c6c6f2c206a617661736372697074207365637572697479
    const ret = Base64.stringify(wordArray); //=> SGVsbG8sIGphdmFzY3JpcHQgc2VjdXJpdHk=
    setResult(ret);
  }

  function sha256() {
    const ary = SHA256(src); // 返回一个WordArray对象. WordArray有id, salt, ciphertext, key, toString(). 其中几个成员全是string类型
    console.log(`szw sha256 salt = ${ary.salt}, key = ${ary.key}, ciphertext = ${ary.ciphertext}`); //=> undefined, undefined, undefined
    setResult(ary.toString()); //=> bfc161b0d60418f77bca11445755dc8a2a24b77a0ef5678bf87e74d7a7d39206
  }

  function aes() {
    const key = "AES key 001";
    const cipherWordArray = AES.encrypt(src, key); //返回一个WordArray对象. //=> 其toString()是: U2FsdGVkX18ugzViOTz+jh5kKLRKZU4WSG4d/8WzFoqbgi1Cj7lu2AmqFYU+gVIM
    console.log(`szw AES salt = ${cipherWordArray.salt}, key = ${cipherWordArray.key}, ciphertext = ${cipherWordArray.ciphertext}`);//=> 均有值
    const decryptedObj = AES.decrypt(cipherWordArray, key); //返回一个DecryptedMessage对象, 其只有一个toString(). //=> 其toString()是48656c6c6f2c206a617661736372697074207365637572697479, 即上面utf8之后的结果, 并不是原src!!!
    const decryptedText = Utf8.stringify(decryptedObj);  //=> Hello, javascript security
    const ret = `encrypted = ${cipherWordArray.toString()}  ; decrypted = ${decryptedText}`;
    setResult(ret);
  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={base64}>base64</button>
      <button onClick={sha256}>SHA256</button>
      <button onClick={aes}>AES</button>
    </div>
  );
};

/*
crypto-js不支持RSA
要使用RSA, 可以参考 https://github.com/travist/jsencrypt
 */