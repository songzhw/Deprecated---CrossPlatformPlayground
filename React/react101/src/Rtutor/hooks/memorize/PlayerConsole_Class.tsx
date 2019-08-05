import React, { useEffect } from "react";
import iconPause from "../../../res/images/icons/icon_pause.png";
import iconPlay from "../../../res/images/icons/icon_play.png";

interface IProps {
  name: string;
  isPause: boolean;
  toggle: () => void;
}

export class PlayerConsole_Class extends React.Component<IProps> {

  public render() {
    const imageName = this.props.isPause ? iconPause : iconPlay;
    // useEffect(() => console.log(`name change`), [props.name]);
    // useEffect(() => console.log(`isPause change`), [props.isPause]);
    // useEffect(() => console.log(`toggle change`), [props.toggle]);
    console.log(`Console render()`);

    return (
      <div>
        <label>{this.props.name}</label>
        <button><img src={imageName} onClick={this.props.toggle}/></button>
      </div>
    );
  }
};

