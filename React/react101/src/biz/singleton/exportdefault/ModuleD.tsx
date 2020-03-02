import React from "react";
import obj from "./ModuleF";
import { change } from "./ModuleE";


export const ModuleD = () => {
  change();
  const id = "id = " + obj.id; //=> id = 33

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

