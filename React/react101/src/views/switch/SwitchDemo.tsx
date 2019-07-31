import React from "react";
import { Switch } from "./Switch";

export const SwitchDemo = () => {

  return (
    <div style={{display: "flex", margin: "20px"}}>
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Switch onToggle={()=>{}}/>
    </div>
  );
};

