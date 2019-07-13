import React, { forwardRef, useImperativeHandle, useRef } from "react";

// TODO 真是暂时找不到ref对应哪个属性了, 只好先用any来了
const MyInput = ({}, ref: any) => {
  const inRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      // @ts-ignore  //TODO 没办法, 这里的possible null错误就是去除不了, 尝试了各种if/else了
      inRef.current.focus();
    }
  }));

  // @ts-ignore
  return (
    <input ref={inRef}/>
  );
};
const MyInput_ = forwardRef(MyInput);


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
      <MyInput_ ref={ref}/>
    </div>
  );
};


