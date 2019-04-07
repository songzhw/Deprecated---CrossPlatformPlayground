import React, { FunctionComponent, useState } from "react";

interface IProps {
  title: string;
  onClick: () => void;
}

// 因为有了React hooks, 函数组件不再认为是stateless, 所以原来的React.SFC就是不对的名字了.
// React.SFC要改用: React.FunctionComponent
export const CountConsole: React.FunctionComponent<IProps> = ({ title, onClick }) => {
  const [count, setCount] = useState(0);

  function onClickButton() {
    onClick();
    setCount(count + 1);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p> Count = {count} </p>
      <button onClick={onClickButton}>count++</button>
    </div>
  );
};
