import React, { useState } from "react";

interface IProps {
}

export const CheckBoxDemo = (props: IProps) => {
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
