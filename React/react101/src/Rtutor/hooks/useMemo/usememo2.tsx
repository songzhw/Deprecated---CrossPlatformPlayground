import React, { useEffect, useState } from "react";

interface IProps {
  fn: () => {};
  values: []
}

function MemoChild2(props: IProps) {
  const { fn, values } = props;

  useEffect(() => {
    console.log(`szw Child re-render`);
  }, [fn, values]);

  return <div> Child </div>;
}

export const UseMemo2 = () => {
  const [count, setCount] = useState(1);
  const fn = () => ({});

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MemoChild2 fn={fn} values={[]}/>
      <button onClick={onClick}>+1</button>
    </div>
  );
};