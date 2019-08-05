import React from "react";
import iconPause from "../../../res/images/icons/icon_pause.png";
import iconPlay from "../../../res/images/icons/icon_play.png";

interface IProps {
  name: string;
  isPause: boolean;
  toggle: () => void;
}

export const PlayerConsole = (props: IProps) => {
  console.log(`console : `, props)
  const imageName = props.isPause ? iconPause : iconPlay;

  return (
    <div>
      <label>{props.name}</label>
      <button><img src={imageName} onClick={props.toggle}/></button>
    </div>
  );
};

