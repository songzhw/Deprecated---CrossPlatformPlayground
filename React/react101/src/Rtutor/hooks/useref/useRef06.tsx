import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

export const Useref06 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    // @ts-ignore
    ref.current.readyToInput();
  };

  return (
    <div>
      <MyInput6 ref={ref} placeholder="hello"/>
      <button onClick={onClick}>focus the input6</button>
    </div>
  );
};

interface IProps {
  placeholder: string
}

export const _MyInput6 = (props: IProps, ref: Ref<HTMLInputElement>) => {
  // @ts-ignore

  useImperativeHandle(ref, () => ({
    readyToInput: () => console.log("my function")
  }));

  return <input ref={ref} type="text" placeholder={props.placeholder}/>;
};

export const MyInput6 = forwardRef(_MyInput6);