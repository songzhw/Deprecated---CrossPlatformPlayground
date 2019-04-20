import React, { useState } from "react";
import Base64 from "crypto-js/enc-base64";

interface IProps {

}

export const CryptoScreen: React.FC<IProps> = (props: IProps) => {
  const src = "Hello, javascript security";

  const [result, setResult] = useState("");

  function base64() {
    const tmp = Base64.stringify(src);
  }

  return (
    <div>
      <span>result = {result}</span>
      <button onClick={base64}>base64</button>
    </div>
  );
};