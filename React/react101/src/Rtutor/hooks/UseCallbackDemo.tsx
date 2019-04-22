import React, { memo, useCallback, useState } from "react";

interface IValue {
  id: number;
  name: string;
  isGood: boolean;
}

interface IChildProps {
  value: IValue;
}

export const UseCallbackDemo = () => {
  const [value, setValue] = useState({ id: 0, name: "", isGood: false });

  function changeName() {
    const newName = value.name + "1";
    setValue({ ...value, name: newName });
  }

  function changeBoolean() {
    const newBool = !value.isGood;
    setValue({ ...value, isGood: newBool });
  }

  return (
    <div>
      <button onClick={changeName}> change name</button>
      <button onClick={changeBoolean}> change isGood</button>
      <p> ------------ </p>
      <Child value={value}/>
    </div>
  );
};

// should updated only when the isGood changed
const Child: React.FC<IChildProps> = (props: IChildProps) => {
  console.log(`szw Children get called : `, props);
  // const memorized = useCallback(() => props.value, [props.value.isGood]);
  const memorizedValue = props.value;
  const boolValue = Boolean(memorizedValue.isGood).toString();
  const text = `Child ${memorizedValue.id} - ${memorizedValue.name} - ${boolValue} `;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
