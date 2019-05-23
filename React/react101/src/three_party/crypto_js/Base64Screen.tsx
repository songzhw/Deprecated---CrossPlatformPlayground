import React, { useState } from "react";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";

interface IProps {

}

/*
Base64.parse() == decode()
Base64.stringify() == encode()
 */
export const Base64Screen = (props: IProps) => {
  const [result, setResult] = useState("...");
  const data = "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

  function onClickDecode() {
    const bytes = Base64.parse(data);
    setResult(Utf8.stringify(bytes));
    //=> {"sub":"1234567890","name":"John Doe","iat":1516239022}
  }

  function onClickBase64Url() {
    const src = "I'm happy";
    const encrypted = base64Url_Encode(src);
    const bytes = Base64.parse(encrypted);
    setResult(Utf8.stringify(bytes));
  }

  function base64Url_Encode(src: string) {
    const bytesIn = Utf8.parse(src);
    let encodedSource = Base64.stringify(bytesIn);
    encodedSource = encodedSource.replace(/=+$/, "");
    encodedSource = encodedSource.replace(/\+/g, "-");
    encodedSource = encodedSource.replace(/\//g, "_");
    return encodedSource;
  }

  function encode() {
    const src = Utf8.parse("01234567");
    const ret : string = Base64.stringify(src);
    setResult(ret);
  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickDecode}>decode</button>
      <button onClick={onClickBase64Url}>Base64Url</button>
      <button onClick={encode}>encode</button>
    </div>
  );
};
