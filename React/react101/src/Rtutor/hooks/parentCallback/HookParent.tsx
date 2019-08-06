import React, { useState } from "react";

export const HookParent = () => {
  const [id, setId] = useState(-1);

  function childCalls() {
    console.log(`child click button`);
  }

  function updateMe() {
    setId(new Date().getTime());
  }

  return (
    <div>
      <HookChild callback={childCalls}/>
      <p/>
      <button onClick={updateMe}> Update Parent : {id}</button>
    </div>
  );
};


interface IProps {
  callback: () => void;
}
const HookChild = (props: IProps) => {
  console.log(`re-render`);
  return (
    <div>
      <button onClick={props.callback}> child</button>
    </div>
  );
};
