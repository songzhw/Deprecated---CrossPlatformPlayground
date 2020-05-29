import React, { useRef } from "react";

interface IProps {
}

export const Useref1 = (props: IProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <input ref={ref} type="text"/>
      <button onClick={onClick}>focus the input</button>
    </div>
  );
};