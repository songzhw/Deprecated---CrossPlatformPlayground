import React, { forwardRef, Ref, useRef } from "react";

export const Useref04 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <MyInput4 ref={ref} placeholder="hello"/>
      <button onClick={onClick}>focus the input4</button>
    </div>
  );
};

interface IProps {
  placeholder: string
}

export const _MyInput4 = (props: IProps, ref: Ref<HTMLInputElement>) =>
  <input ref={ref} type="text" placeholder={props.placeholder}/>


export const MyInput4 = forwardRef(_MyInput4)