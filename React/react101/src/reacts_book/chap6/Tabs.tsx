import React from "react";
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


interface ITabContext {
  activeName: string;
  onTabClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const TabContext = React.createContext<ITabContext>({ activeName: "" });


export class Tabs extends React.Component<IProps, IState> {

  public static Tab: React.FunctionComponent<IOneTabProps> = props => (
    <li> {props.children} </li>
  );

  public render(): React.ReactNode {
    const contextValue = {
      activeName: this.state ? this.state.activeTabName : "",
      onTabClick: this.onTabClick
    };
    return (
      <TabContext.Provider value={contextValue}>
        <ul className="tabs">
          {this.props.children}
        </ul>
      </TabContext.Provider>
    );
  }

  private onTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : "";
    this.setState({ activeTabName: heading });
  };
}