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
  const memorized = useCallback(() => props.value, [props.value.isGood]);
  const memorizedValue = memorized();
  const boolValue = Boolean(memorizedValue.isGood).toString();
  const text = `Child ${memorizedValue.id} - ${memorizedValue.name} - ${boolValue} `;
  return (
    <div>
      {console.log(`child render`)}
      <p>{text}</p>
    </div>
  );
};

// 可见当name变化时, child仍是刷新了(走了"child render"), 只是数据仍是老数据而已
// 所以这个不是shouldComponentUpdate()的效果, 我要的是Child根本不刷新

// 可见useCallback()只是节省了useCallback(fn, dependencies)中的fn不要再次计算
// 所以useCallback()适用于fn过于复杂的情况, 这样我们不用频繁地去计算它.
// 但useCallback并不是shouldComponentUpdate()的优秀替代者
