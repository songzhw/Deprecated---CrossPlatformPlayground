import React, { forwardRef, useRef } from "react";

interface IMyInputProps {
  // TODO 真是暂时找不到ref对应哪个属性了, 只好先用any来了
  ref: any;
}

const MyInput = (props: IMyInputProps) => {

  return (
    <input/>
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


