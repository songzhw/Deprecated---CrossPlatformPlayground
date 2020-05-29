import React, { useCallback, useEffect, useState } from "react";

/*在usemeo4的基础上改一下, 不用React.useMemo(), 那child就会出现无谓的刷新了. 所以一对比就知道了useMemo()的作用了*/
interface IProps {
  fn: () => {};
  values: number[]
}

function _MemoChild5(props: IProps) {
  console.log(`szw child re-render`);
  return <div> Child </div>;
}

const MemoChild5 = React.memo(_MemoChild5, (prevProps, nextProps) => {
  // console.log("1. ", prevProps.fn === nextProps.fn)  //=> true
  // console.log("2. ", prevProps.values === nextProps.values) //=> true
  return prevProps.fn === nextProps.fn && prevProps.values === nextProps.values;
});


export const UseMemo5 = () => {
  const [count, setCount] = useState(1);
  // const fn = () => ({}); // ()=>{}是指()=>void; 而()=>({})表示返回值是一个空对象{}
  const fn = React.useCallback(() => ({}), []);
  const va = React.useMemo(() => [1, 2], []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MemoChild5 fn={fn} values={[1, 2]}/>
      <button onClick={onClick}>{count}</button>
    </div>
  );
};