import {IAction} from "./reduxRecommend";

export interface IReduxProps {
  dispatch: (action : IAction) => void;
}