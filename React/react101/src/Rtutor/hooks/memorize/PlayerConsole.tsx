import React from "react";

interface IProps {
  isPause: boolean
}

export const PlayerConsole = (props: IProps) => {
  const imageName = props.isPause ? "icon_pause" : "icon_play";
  const image = `../../../images/icons/${imageName}.png`;
  return (
    <div>
      <label>Harry Potter 4</label>
      <button><img src={"./icon_pause.png"}/></button>
    </div>
  );
};

