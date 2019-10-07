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
  return (
    <div>

      <p> Parent </p>
      <p>{"" + time}</p>
      <button onClick={onClickMySelf}> Click me to add number</button>
      <p> - - - - - - - - - - </p>

      <p>Child</p>
      <Child name={"name from parent"} clickEvent={onClick}/>

    </div>
  );
};

interface IChildProps {
  name: string;
  clickEvent: () => void;
}

export const Child = React.memo((props: IChildProps) => {
  console.log(`szw child re-render`);
  return (
    <button onClick={props.clickEvent}>{props.name}</button>
  );
}, ((prevProps, nextProps) => {
  console.log(`szw , `, nextProps.name === prevProps.name);
  return nextProps.clickEvent === prevProps.clickEvent;
}));
