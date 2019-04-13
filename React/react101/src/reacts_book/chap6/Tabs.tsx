import React, { useState } from "react";
import "../../index.css";

interface IProps {
}

interface IState {
  activeTabName: string; //active heading name
}

interface IOneTabProps {
  name: string;
  isInitActive?: boolean
}


export class Tabs extends React.Component<IProps, IState> {


  public static Tab: React.FunctionComponent<IOneTabProps> = props => {
    const [activeTabName, setActiveTabName] = useState("Description");

    function onTabClick(e: React.MouseEvent<HTMLLIElement>) {
      const li = e.target as HTMLLIElement;
      const heading: string = li.textContent ? li.textContent : "";
      console.log(`szw heading=${heading}`)
      setActiveTabName(heading);
    };

    const className = activeTabName === props.name ? "active" : "";
    console.log(`szw oneTab : state.activeName=${activeTabName} : self=${props.name}; className=${className}`);

    return (
      <li onClick={onTabClick} className={className}> {props.children} </li>
    );
  };

  public render(): React.ReactNode {
    return (
      <ul className="tabs">
        {this.props.children}
      </ul>
    );
  }


}