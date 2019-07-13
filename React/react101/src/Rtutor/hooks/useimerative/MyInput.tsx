import React, { useRef } from "react";

interface IMyInputProps {
  ref: any;
}

export const MyInput = (props: IMyInputProps) => {
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

  return (
    <div>
      <button onClick={focusInput}> focus</button>
      <p/>
      <MyInput ref={ref}/>
    </div>
  );
};


