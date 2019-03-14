import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import InputNameScreen from "../screen/InputNameScreen";
import FetchGoodsScreen from "../screen/FetchGoodsScreen";


const routes = createStackNavigator(
  {
    HomeScreen, InputNameScreen, FetchGoodsScreen
  },
  {
    headerMode: "screen"
  }
);
export default createAppContainer(routes);
