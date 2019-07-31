import React, { useMemo, useState } from "react";
import { delay } from "../../../../utils/utils";


export const HeavyFuncDemo = () => {
  const [count, setCount] = useState(0);

  function runFunc(event: React.FormEvent<HTMLInputElement>) {
    const value = parseInt(event.currentTarget.value, 10);
    setCount(value);
  }

  const work = async () => {
    await delay(3000);
    return count * 20;
  };


  const calculator = useMemo(() => {
    return work();
  }, [count]);


  return (
    <div>
      <p>heavy func: {calculator} </p>
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <input type={"text"} onChange={e => runFunc(e)}
             placeholder={"set count"}/>
    </div>
  );
};

