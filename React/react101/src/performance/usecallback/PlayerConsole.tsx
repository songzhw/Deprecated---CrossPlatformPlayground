import React from "react";

interface IProps {
  job: () => void;
}

const _PlayerConsole2 = (props: IProps) => {
  console.log(`child render`);

  return (
    <div>
      <button onClick={props.job}>Click Me!</button>
    </div>
  );
};


export const PlayerConsole2 = React.memo(_PlayerConsole2);

