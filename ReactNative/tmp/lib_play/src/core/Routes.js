import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import InputNameScreen from "../screen/InputNameScreen";
import FetchGoodsScreen from "../screen/FetchGoodsScreen";
import FetchBooksScreen from "../screen/FetchBooksScreen";
import WhenToPersistScreen from "../screen/WhenToPersistScreen";
import PersistFunctionScreen from "../screen/PersistFunctionScreen";


const routes = createStackNavigator(
  {
    HomeScreen, InputNameScreen, FetchGoodsScreen, FetchBooksScreen, WhenToPersistScreen,
    PersistFunctionScreen
  },
  {
    headerMode: "screen"
  }
);
export default createAppContainer(routes);
