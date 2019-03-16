import { IAction } from "../redux/reduxRecommend";
import { NavigationScreenProp } from "react-navigation";

export interface IReduxProps {
  dispatch: (action: IAction) => void;
}

export interface INavigationProps {
  navigation: NavigationScreenProp<any, any>
}
