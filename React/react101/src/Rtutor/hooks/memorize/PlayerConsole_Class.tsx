import chalk from "chalk";
import React, { useEffect } from "react";
import iconPause from "../../../res/images/icons/icon_pause.png";
import iconPlay from "../../../res/images/icons/icon_play.png";

interface IProps {
  name: string;
  isPause: boolean;
  toggle: () => void;
}

export class PlayerConsole_Class extends React.Component<IProps> {

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log(`name: `, this.props.name === nextProps.name);
    console.log(`isPause: `, this.props.isPause === nextProps.isPause);
    console.log(`toggle: `, this.props.toggle === nextProps.toggle);
    return this.props.name !== nextProps.name || this.props.isPause !== nextProps.isPause ||
      this.props.toggle !== nextProps.toggle
  }

  public render() {
    const imageName = this.props.isPause ? iconPause : iconPlay;
    console.log(chalk.red(`PlayConsoler re-render!!!`));

    return (
      <div>
        <label>{this.props.name}</label>
        <button><img src={imageName} onClick={this.props.toggle}/></button>
      </div>
    );
  }
};

