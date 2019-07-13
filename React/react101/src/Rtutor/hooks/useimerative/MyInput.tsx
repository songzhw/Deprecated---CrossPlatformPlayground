import React, { Attributes, MutableRefObject, useRef } from "react";


export const MyInput = (props: MutableRefObject<null>) => {
  return (
    <input/>
  );
};

export const InputParent = () => {
  const ref = useRef(null);

  function focusInput() {
    // @ts-ignore
    ref.current.focus();
  }

  // @ts-ignore
  return (
    <div>
      <button onClick={focusInput}> focus</button>
      <p/>
      <MyInput ref={ref}/>
    </div>
  );
};

