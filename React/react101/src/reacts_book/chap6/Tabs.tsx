import React from "react";
import "../../index.css";

interface IProps {
}

interface IState {
  activeTabName: string; //active heading name
}

interface ITabProps {
  name: string;
  isInitActive?: boolean
}

export class Tabs extends React.Component<IProps, IState> {

  public static Tab: React.FunctionComponent<ITabProps> = props => (
    <li> {props.children} </li>
  );

  public render(): React.ReactNode {
    return (
      <ul className="tabs">
        {this.props.children}
      </ul>
    );
  }

  private onTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : "";
    this.setState({ activeTabName: heading });
  };
}