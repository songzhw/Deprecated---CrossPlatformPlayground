import React, { useCallback, useState } from "react";


export const AfterUseCallback_ExampleB = () => {
  const [time, setTime] = useState(0);
  let childName = "from parent";

  function onClickMySelf() {
    setTime(prevTime => prevTime + 1);
  }

  function onClickMeToo() {
    childName = new Date().toISOString();
  }


  function onClick(arg: string) {
    console.log(`szw parent click: `, arg);
  }

  console.log(`szw parent re-render`);
  const callback = useCallback(onClick, [childName]);
  return (
    <div>

      <p> Parent </p>
      <p>{"" + time}</p>
      <button onClick={onClickMySelf}> Click me to add number</button>
      <button onClick={onClickMeToo}> Click me to change name</button>
      <p> - - - - - - - - - - </p>

      <p>Child</p>
      <Child name={"name from parent"} clickEvent={callback}/>

    </div>
  );
};

interface IChildProps {
  name: string;
  clickEvent: (arg: string) => void;
}

const _Child = (props: IChildProps) => {
  console.log(`szw child re-render`);

  function onChildClick() {
    props.clickEvent(props.name);
  }

  return (
    <button onClick={onChildClick}>{props.name}</button>
  );
};

export const Child = React.memo(_Child, ((prevProps, nextProps) => {
  console.log(`szw , 1`, nextProps.name === prevProps.name);
  console.log(`szw , 2`, nextProps.clickEvent === prevProps.clickEvent);
  return nextProps.clickEvent === prevProps.clickEvent;
}));
