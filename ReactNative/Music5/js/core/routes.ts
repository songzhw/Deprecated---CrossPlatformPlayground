import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import PlayScreen from "../screen/PlayScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen, PlayScreen
  },
  {
    headerMode: "screen"
  }
);

export default createAppContainer(HomeStack);