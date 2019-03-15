import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import InputNameScreen from "../screen/InputNameScreen";
import FetchGoodsScreen from "../screen/FetchGoodsScreen";
import FetchBooksScreen from "../screen/FetchBooksScreen";


const routes = createStackNavigator(
  {
    HomeScreen, InputNameScreen, FetchGoodsScreen, FetchBooksScreen
  },
  {
    headerMode: "screen"
  }
);
export default createAppContainer(routes);
