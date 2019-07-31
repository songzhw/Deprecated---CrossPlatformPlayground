import React, { useMemo, useState } from "react";
import { delaySync } from "../../../../utils/utils";


export const HeavyFuncDemo = () => {
  const [count, setCount] = useState(0);

  const work = () => {
    delaySync(3000);
    return count * 10;
  };

  const result = useMemo(() => {
    return work();
  }, [count]);
  console.log(`szw result = `, result);


  // @ts-ignore
  return (
    <div>
      <p>heavy func: </p>
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <input type={"text"} onChange={e => setCount(parseInt(e.currentTarget.value, 10))}
             placeholder={"set count"}/>
    </div>
  );
};

