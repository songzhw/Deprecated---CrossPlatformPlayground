import React, { useEffect } from "react";
import iconPause from "../../../../res/images/icons/icon_pause.png";
import iconPlay from "../../../../res/images/icons/icon_play.png";

// @deprecated
interface IProps {
  name: string;
  isPause: boolean;
  toggle: () => void;
}

const _PlayerConsole = (props: IProps) => {
  const imageName = props.isPause ? iconPause : iconPlay;

  // useEffect(() => console.log(`name change`), [props.name]);
  // useEffect(() => console.log(`isPause change`), [props.isPause]);
  useEffect(() => console.log(`toggle change`), [props.toggle]);
  console.log(`Console render()`);

  return (
    <div>
      <label>{props.name}</label>
      <button><img src={imageName} onClick={props.toggle}/></button>
    </div>
  );
};

export const PlayerConsole = React.memo(_PlayerConsole)

