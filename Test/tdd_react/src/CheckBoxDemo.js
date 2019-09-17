import React, { useState } from "react";


export const CheckBoxDemo = () => {
  const [isOn, setIsOn] = useState(false);

  function onChange() {
    setIsOn(prev => !prev);
  }

  return (
    <div>
      <input type="checkbox" onChange={onChange}/>
    </div>
  );
};
