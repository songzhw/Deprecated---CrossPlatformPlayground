import React, { useState } from "react";


export const WithUseRef = () => {
  const encryptedRef = React.useRef("$$$");
  const [isDone, setDone] = useState(false);

  function encrypt() {
    encryptedRef.current = "0a1b2c3c==";
    setDone(true);
  }

  function decrypt() {

  }

  return (
    <div>
      <p> {encryptedRef.current} </p>
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
    </div>
  );
};

