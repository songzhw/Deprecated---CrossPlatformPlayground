import React, { useState } from "react";
import { Switch } from "./Switch";

export const SwitchDemo = () => {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Switch onToggle={toggle} isOn={isOn}/>
    </div>
  );
};

