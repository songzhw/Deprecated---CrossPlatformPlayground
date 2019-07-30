import React from "react";
import { delay } from "../../../../utils/utils";


export const HeavyFuncDemo = () => {

  function runFunc(event: React.MouseEvent<HTMLButtonElement>) {
    const id = event.currentTarget.dataset.id!;
    console.log(`click button : `, new Date());
    work(id);
  }

  async function work(id: string) {
    await delay(3000);
    console.log(`work: ${id} : `, new Date());
  }

  return (
    <div>
      <p>heavy func</p>
      <button data-id={"100"} onClick={runFunc}> run</button>
    </div>
  );
};

