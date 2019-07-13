import React, { useState, useRef, Fragment, useEffect } from "react";

export const Useref2 = () => {
  const [num, setNum] = useState(0);
  const myref = useRef(null);

  useEffect(() => console.log(myref.current, `>>>>>>>>>`));

  return (
    <Fragment>
      <button onClick={() => setNum(num + 1)}> click to +1</button>
      <p ref={myref}> You click {num} times </p>
    </Fragment>
  );
};
