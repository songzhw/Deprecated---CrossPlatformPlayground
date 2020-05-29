import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

/* @deprecated(error = "TypeError: ref.current.focus is not a function" when click the button", 主要是这个ref是imperativeHandler了的, 没有focus()这个方法哦! */
export const Useref07 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    // @ts-ignore
    ref.current.readyToInput();
    // @ts-ignore
    ref.current.focusNow()
  };

  return (
    <div>
      <MyInput7 ref={ref} placeholder="hello"/>
  <button onClick={onClick}>focus the input7</button>
  </div>
);
};

interface IProps {
  placeholder: string
}

export const _MyInput7 = (props: IProps, ref: Ref<HTMLInputElement>) => {
  // @ts-ignore
  useImperativeHandle(ref, () => ({
    readyToInput: () => console.log("my function"),
    focusNow: () =>
      // @ts-ignore
      ref.current.focus()
  }));

  return <input ref={ref} type="text" placeholder={props.placeholder}/>;
};

export const MyInput7 = forwardRef(_MyInput7);