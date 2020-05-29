import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

/* @deprecated(error = "TypeError: ref.current.focus is not a function" when click the button" */
export const Useref05 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <MyInput5 ref={ref} placeholder="hello"/>
      <button onClick={onClick}>focus the input5</button>
    </div>
  );
};

interface IProps {
  placeholder: string
}

export const _MyInput5 = (props: IProps, ref: Ref<HTMLInputElement>) =>{
  // @ts-ignore
  useImperativeHandle(ref, ()=>({
    readyToInput: ()=>console.log("my function")
  }))

  return <input ref={ref} type="text" placeholder={props.placeholder}/>;
}

export const MyInput5 = forwardRef(_MyInput5);