import React from "react";
import "../../index.css";

interface IProps {
  tabNames: string[];
}

interface IState {
  activeTabName: string; //active heading name
}

export class Tabs extends React.Component<IProps, IState> {
  public state = {
    activeTabName:
      this.props.tabNames && this.props.tabNames.length > 0
        ? this.props.tabNames[0]
        : ""
  };

  public render(): React.ReactNode {
    return (
      <ul className="tabs">
        {this.props.tabNames.map(heading => (
          <li
            key={heading}
            className={heading === this.state.activeTabName ? "active" : ""}
            onClick={this.onTabClick}
          >
            {heading}
          </li>
        ))}
      </ul>
    );
  }

  private onTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : "";
    this.setState({ activeTabName: heading });
  };
}