import React, { MutableRefObject, RefObject, useRef } from "react";


/*@deprecated (先是warning, "Warning: Function components cannot be given refs."; 若再点击时crash, 说ref = {current: null}) */
export const Useref02 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <MyInput2 ref={ref}/>
      <button onClick={onClick}>focus the input2</button>
    </div>
  );
};

interface IProp {
  ref: RefObject<HTMLInputElement>;
}

export const MyInput2 = (props: IProp) =>
  <input ref={props.ref} type="text"/>;
