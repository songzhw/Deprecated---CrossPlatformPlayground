import React, { useState } from "react";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";

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

  return (
    <div>
      <span>result = {result}</span>
      <button onClick={base64}>base64</button>
    </div>
  );
};