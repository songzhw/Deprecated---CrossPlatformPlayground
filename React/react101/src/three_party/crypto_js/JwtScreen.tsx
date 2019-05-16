import React, { useState } from "react";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import HmacSHA256 from "crypto-js/hmac-sha256";

interface IProps {
}

export const JwtScreen = (props: IProps) => {
  const [result, setResult] = useState("");
  const header = { alg: "HS256", typ: "JWT" }; //注意: 第二参不是type, 是叫typ
  const payload = { sub: "1234567890", name: "John Doe", iat: 1516239022 };
  const secret = "your-256-bit-secret";

  function onClickEncode() {
    const header2 = processFirstTow(header);
    const payload2 = processFirstTow(payload);
    const firstTwo = `${header2}.${payload2}`;
    const rawSignature = HmacSHA256(firstTwo, secret);
    const signature = base64url(rawSignature);
    const jwt = `${firstTwo}.${signature}`;
    setResult(jwt);
    // 结果和jwt.io里结果一样
  }

  function processFirstTow(srcJson: object) {
    const utfIn = Utf8.parse(JSON.stringify(srcJson));
    return base64url(utfIn);

  }

  // 参数类型是any, 但没办法, 我在@tyeps/crypto-js里看到的就是parse()返回any
  function base64url(source: any) {
    let encodedSource = Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, "");
    encodedSource = encodedSource.replace(/\+/g, "-");
    encodedSource = encodedSource.replace(/\//g, "_");
    return encodedSource;
  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickEncode}>encode</button>
    </div>
  );
};
