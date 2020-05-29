import React, { useCallback, useEffect, useState } from "react";

/*完美, child再也不会无谓刷新了*/
interface IProps {
  fn: () => {};
  values: number[]
}

function _MemoChild4(props: IProps) {
  console.log(`szw child re-render`);
  return <div> Child </div>;
}

const MemoChild4 = React.memo(_MemoChild4, (prevProps, nextProps) => {
  // console.log("1. ", prevProps.fn === nextProps.fn)  //=> true
  // console.log("2. ", prevProps.values === nextProps.values) //=> true
  return prevProps.fn === nextProps.fn && prevProps.values === nextProps.values;
});


export const UseMemo4 = () => {
  const [count, setCount] = useState(1);
  // const fn = () => ({}); // ()=>{}是指()=>void; 而()=>({})表示返回值是一个空对象{}
  const fn = React.useCallback(() => ({}), []);
  const va = React.useMemo(() => [1, 2], []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MemoChild4 fn={fn} values={va}/>
      <button onClick={onClick}>{count}</button>
    </div>
  );
};