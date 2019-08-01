import React, { useState } from "react";
import { Switch } from "./Switch";

export const SwitchDemo = () => {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    console.log(`demo: toggle: `, isOn)
    setIsOn(!isOn);
  }

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      <Switch onToggle={toggle} isOn={isOn}/>
    </div>
  );
};

