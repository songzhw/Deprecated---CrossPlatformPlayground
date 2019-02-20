import { createStackNavigator } from "react-navigation";
import SecondScreen from "../screen/SecondScreen";
import FirstScreen from "../screen/FirstScreen";

const HomeStack = createStackNavigator(
  { FirstScreen, SecondScreen },
  { headerMode: "screen" },
);

export default HomeStack;