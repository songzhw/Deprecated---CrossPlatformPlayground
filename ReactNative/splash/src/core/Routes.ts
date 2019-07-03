import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import { HomeScreen } from "../screen/HomeScreen";
import { SecondScreen } from "../screen/SecondScreen";
import { SettingScreen } from "../screen/SettingScreen";
import { AccountScreen } from "../screen/AccountScreen";

const HomeNavigation = createSwitchNavigator({
  Home: HomeScreen,
  Second: SecondScreen
});

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeNavigation },
  Setting: { screen: SettingScreen },
  Account: { screen: AccountScreen }
});

export const Router = createAppContainer(AppNavigator);
