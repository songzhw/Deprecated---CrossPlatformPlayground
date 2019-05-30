import { createStackNavigator } from "react-navigation";
import { PassB1Screen } from "../biz/navigators/pass_value/PassB1Screen";
import { PassA1Screen } from "../biz/navigators/pass_value/PassA1Screen";


export const Routes = createStackNavigator(
  { PassA1Screen, PassB1Screen }
);
