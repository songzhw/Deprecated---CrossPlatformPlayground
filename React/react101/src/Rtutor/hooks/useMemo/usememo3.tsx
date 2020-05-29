import React, { useCallback, useEffect, useState } from "react";

interface IProps {
  fn: () => {};
  values: number[]
}

function MemoChild3(props: IProps) {
  console.log(`szw child re-render`);
  return <div> Child </div>;
}

export const UseMemo3 = () => {
  const [count, setCount] = useState(1);
  // const fn = () => ({}); // ()=>{}是指()=>void; 而()=>({})表示返回值是一个空对象{}
  const fn = React.useCallback(() => ({}), []);
  const va = React.useMemo(() => [1, 2], []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MemoChild3 fn={fn} values={va}/>
      <button onClick={onClick}>+1</button>
    </div>
  );
};