import {NavigationScreenProp} from "react-navigation";

export interface IAction {
  type: string,
  payload?: any
}

export interface IReduxProps {
  dispatch: (action : IAction) => void;
}

export interface INavigationProps {
  navigation: NavigationScreenProp<any, any>
}
