import React from "react";
import { obj } from "./ModuleC";
import { change } from "./ModuleB";


export const ModuleA = () => {
  change();
  const id = "id = " + obj.id; //=> id = 33

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

