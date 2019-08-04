import React from "react";
import iconPause from "../../../res/images/icons/icon_pause.png"
import iconPlay  from "../../../res/images/icons/icon_play.png"

interface IProps {
  isPause: boolean
}

export const PlayerConsole = (props: IProps) => {
  const imageName = props.isPause ? iconPause : iconPlay;
  return (
    <div>
      <label>Harry Potter 4</label>
      <button><img src={imageName}/></button>
    </div>
  );
};

