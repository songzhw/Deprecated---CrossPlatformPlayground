import { createAppContainer, createStackNavigator } from "react-navigation";
import { GameScreen } from "../ui/GameScreen";
import { HomeScreen } from "../ui/HomeScreen";

const RouteList = createStackNavigator({
  HomeScreen, GameScreen
});

export const Routes = createAppContainer(RouteList);