import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

/* perfect */
export const Useref08 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    // @ts-ignore
    ref.current.readyToInput();
    // @ts-ignore
    ref.current.focusNow()
  };

  return (
    <div>
      <MyInput8 ref={ref} placeholder="hello"/>
      <button onClick={onClick}>focus the input8</button>
    </div>
  );
};

interface IProps {
  placeholder: string
}

export const _MyInput8 = (props: IProps, ref: Ref<HTMLInputElement>) => {
  const innerRef = useRef(null)

  // @ts-ignore
  useImperativeHandle(ref, () => ({
    readyToInput: () => console.log("my function"),
    focusNow: () =>
      // @ts-ignore
      innerRef.current.focus()
  }));

  return <input ref={innerRef} type="text" placeholder={props.placeholder}/>;
};

export const MyInput8 = forwardRef(_MyInput8);