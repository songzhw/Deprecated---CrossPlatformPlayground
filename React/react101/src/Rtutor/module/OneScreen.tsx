console.log(`000`);
import React from "react";
import { foo, obj1 } from "./OneHelper";

export const OneScreen = () => {

  function click1() {
    foo();
    console.log(`point = `, obj1);
  }

  return (
    <div>
      <button onClick={click1}> call</button>
    </div>
  );
};
