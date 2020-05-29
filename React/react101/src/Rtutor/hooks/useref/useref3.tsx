import React, { MutableRefObject, Ref, RefObject, useRef } from "react";

/* 这个例子完美. 一没有warning, 二是点击有我们期待的效果 */
export const Useref03 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <MyInput3 ref={ref} placeholder="hello"/>
      <button onClick={onClick}>focus the input3</button>
    </div>
  );
};

interface IProps {
  placeholder: string
}
export const MyInput3 = React.forwardRef((props: IProps, ref: Ref<HTMLInputElement>) =>
  <input ref={ref} type="text" placeholder={props.placeholder}/>
);
