import React, { FunctionComponent } from "react";

interface IProps {
  text: string;
  onClick: () => void;
}

// 因为有了React hooks, 函数组件不再认为是stateless, 所以原来的React.SFC就是不对的名字了.
// React.SFC要改用: React.FunctionComponent
export const CountConsole: React.FunctionComponent<IProps> = ({ text, onClick }) => {

  return (
    <div>
      <p>{text}</p>
      <button onClick={onClick}>count++</button>
    </div>
  );
};
