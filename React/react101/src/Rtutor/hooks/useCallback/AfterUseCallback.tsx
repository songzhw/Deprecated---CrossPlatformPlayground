import React, { useCallback, useState } from "react";


export const AfterUseCallback = () => {
  const [time, setTime] = useState(0);

  function onClickMySelf() {
    setTime(prevTime => prevTime + 1);
  }


  function onClick() {
    console.log(`szw parent click`);
  }

  console.log(`szw parent re-render`);
  const callback = useCallback(onClick, []);
  return (
    <div>

      <p> Parent </p>
      <p>{"" + time}</p>
      <button onClick={onClickMySelf}> Click me to add number</button>
      <p> - - - - - - - - - - </p>

      <p>Child</p>
      <Child name={"name from parent"} clickEvent={callback}/>

    </div>
  );
};

interface IChildProps {
  name: string;
  clickEvent: () => void;
}

const _Child = (props: IChildProps) => {
  console.log(`szw child re-render`);
  return (
    <button onClick={props.clickEvent}>{props.name}</button>
  );
};

export const Child = React.memo(_Child, ((prevProps, nextProps) => {
  console.log(`szw , `, nextProps.clickEvent === prevProps.clickEvent);
  return nextProps.clickEvent === prevProps.clickEvent;
}));
