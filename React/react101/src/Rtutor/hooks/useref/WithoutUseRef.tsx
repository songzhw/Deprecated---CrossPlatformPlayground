import React, { useState } from "react";


export const WithoutUseRef = () => {
  let encrypted = "***";
  const [isDone, setDone] = useState(false);

  function encrypt() {
    encrypted = "0a1b2c3c==";
    setDone(true);
  }

  function decrypt() {

  }

  return (
    <div>
      <p> {encrypted} </p>
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
    </div>
  );
};

